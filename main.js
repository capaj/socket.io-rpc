var Promise = require('bluebird');
var logger = require('debug');
var debug = logger('socket.io-rpc');
var lldebug = logger('socket.io-rpc:low-level');
var _ = require('lodash');
var path = require('path');
/**
 * @param {Manager} ioP socket.io manager instance returned by require('socket.io').listen(server);
 * @param {Express} expApp express app
 * @returns {{expose: Function, loadClientChannel: Function, masterChannel: Object}} rpc backend instance
 */
function createServer(ioP, expApp) {

	var runDate = new Date();
	var io;

	//channel template support hash, will store the templates
	var channelTemplates = {};
	var channelTemplatesSize = 0;
	var clientKnownChannels = {};


	var deferreds = [];
	var serverChannels = {};
	var clientChannels = {};
	var getClientChannel = function (id, name) {
		if (!clientChannels.hasOwnProperty(id)) {
			lldebug("creating an object for client channels for ID " + id);
			clientChannels[id] = {};
		}
		if (!clientChannels[id].hasOwnProperty(name)) {
			lldebug("creating a client channel for client with ID " + id + " and channel name " + name);
			clientChannels[id][name] = {};
		}
		return clientChannels[id][name];
	};

	var getChannelNames = function () {
		var names = [];
		for(var channel in serverChannels){
			names.push(channel);
		}
		return names;
	};


	/**
	 * @param {String} name
	 * @param {Object} toExpose
	 * @returns {RpcChannel}
	 * @constructor
	 */
	var RpcChannel = function (name, toExpose) {
		this.fns = toExpose;

		/**
		 * @type {Array<String>}
		 */
		this.fnNames = [];

		for (var fnName in toExpose) {
			this.fnNames.push(fnName);
		}
		Object.freeze(toExpose);    //we won't support adding new methods to a channel after creation


			for (var tplId in channelTemplates) {
				if (_.isEqual(channelTemplates[tplId], this.fnNames)) {
					this.tplId = Number(tplId);   // converting string key to number
				}
			}
			if (!_.isNumber(this.tplId)) {   //if no template matches the methods collection we save this channel methods as new template
				var index = channelTemplatesSize + 1;
				channelTemplates[index] = this.fnNames;
				channelTemplatesSize = index;
				this.tplId = index;
			}

		this._socket = io.of('/rpc/' + name);

		this._socket.on('connection', function (socket) {
			var invocationRes = function (data) {
				if (toExpose.hasOwnProperty(data.fnName) && typeof toExpose[data.fnName] === 'function') {
					var retVal;
					try{
						retVal = toExpose[data.fnName].apply(socket, data.args);
					}catch(e){
						//we explicitly print the error into the console, because uncatched errors should not occur
						console.error('RPC method ' + data.fnName + ' on channel ' + name + ': ',e);
						retVal = e;
					}
					/* NOTE: Will return true for *any thenable object*, and isn't truly safe, since it will access the `then` property*/
					if (retVal && typeof retVal.then === 'function') {    // this is async function, so 'return' is emitted after it finishes
						retVal.then(function (asyncRetVal) {
							socket.emit('resolve', { Id: data.Id, value: asyncRetVal });
						}, function (error) {
							if (error instanceof Error) {
								error = error.toString();
							}
							socket.emit('reject', { Id: data.Id, reason: error });

						});
					} else {
						//synchronous
						if (retVal instanceof Error) {
							socket.emit('reject', { Id: data.Id, reason: retVal.toString() });
						} else {
							socket.emit('resolve', { Id: data.Id, value: retVal });
						}
					}

				} else {
					socket.emit('reject', {Id: data.Id, reason: 'no such function has been exposed: ' + data.fnName });
				}
			};

			socket.on('call', invocationRes);

		});

		return this;
	};

	var invocationCounter = 0;
	var endCounter = 0;
	var callToClientEnded = function (Id) {
		if (deferreds[Id]) {
			delete deferreds[Id];
			endCounter++;
			if (endCounter == invocationCounter) {
				invocationCounter = 0;
				endCounter = 0;
			}
		} else {
			//the client can maliciously try and resolve/reject something more than once. We should not throw an error on this, just warn
			console.error("Deferred Id " + Id + " was resolved/rejected more than once, this should not occur.");
		}
	};

	var rpcInstance = {
		/**
		 * @returns {object} has of all channels
		 */
		get channels() {
			return serverChannels;
		},
		/**
		 *  Makes a hash of functions available for client's consumption
		 * @param {String} name
		 * @param {Object} toExpose
		 * @param {String} [urlForModule] used when registering express app.get callback
		 * @returns {rpcInstance}
		 */
		expose: function (name, toExpose, urlForModule) {
			if (!urlForModule) {
				urlForModule = '/rpc/' + name + '.js';
			}
			var fnNames = Object.keys(toExpose);

			expApp.get(urlForModule, function (req, res){
				res.type('application/javascript; charset=utf-8');
				var fullUrl = "'" + req.protocol + '://' + req.get('host') + "'";

				var clSideScript = 'var fns = ' + JSON.stringify(fnNames) + '\n' + '' +
					'var chnl = require("rpc/export-channel")("' + name + '", fns, ' + fullUrl + ') \n' +
					'module.exports = chnl;';
				res.send(clSideScript);
				res.end();
			});

			if (serverChannels[name]) {
				console.warn("This channel name(" + name + ") is already exposed-ignoring the command.");
			} else {
				if (toExpose.rpcProps) {
					throw new Error('Failed to expose channel, rpcProps property is reserved for socket and rpc stuff');
				}
				serverChannels[name] = new RpcChannel(name, toExpose);
			}
			return rpcInstance;
		},
		/**
		 *  Makes a file's exported methods available for consumption
		 * @param {String} mPath to the module you want to require on the client side
		 * @returns {rpcInstance}
		 */
		exposeFile: function (mPath) {
			var stack = new Error().stack;

			var callerFile = stack.split('\n')[2].match(/\(.*\)/g)[0];
			callerFile = callerFile.substr(1, callerFile.indexOf('.js') + 2);

			var absToModule = path.join(path.dirname(callerFile), mPath);
      var toModule = path.relative('./', absToModule).split(path.sep);		//relative to the execution context
			var exposedObj = require(absToModule);

			var url = '/' + toModule.join('/') + '.js';

     	return this.expose(mPath, exposedObj, url);
		},
		/**
		 *
		 * @param {Socket} socket
		 * @param {String} name
		 * @returns {Promise} which will get resolved when client channel is ready
		 */
		loadClientChannel: function (socket, name) {
			var channel = getClientChannel(socket.id, name);

			/**
			 * @type {Promise}
			 */
			if (!channel.dfd) {
				channel.dfd = Promise.defer();

				socket.on('disconnect', function onDisconnect() {
					var err = function () {
						throw new Error('Client channel disconnected, this channel is not available anymore')
					};
					for (var method in channel.fns) {
						channel.fns[method] = err;	// references to client channel might be hold in client code, so we need to invalidate them
					}
					debug("disconnected clc " + name);
				});
			}
			return channel.dfd.promise;
		}
	};


	var sendFileOpts = {
		root: './'
	};
	var nm = 'node_modules/socket.io-rpc/';
  var fileMap = {
		'/rpc/client.js': nm + 'client/client.js', //raw client, do not use this unless you know what you are doing
		'/rpc/rpc-client.js': nm + 'client/socket.io-rpc-client.js', //normal browser client
		'/rpc/export-channel.js': nm + 'client/export-channel.js', //angular client
		'/rpc/rpc-client-angular.js': nm + 'client/socket.io-rpc-client-angular.js', //angular client
		'/rpc/rpc-client-angular-bundle.js': nm + 'dist/rpc-client-angular-bundle.js', //client with angular bundled and minified
		'/rpc/rpc-client-angular-bundle.min.js': nm + 'dist/rpc-client-angular-bundle.min.js' // this is not normally needed
	};

	Object.keys(fileMap).forEach(function (serverPath){
		expApp.get(serverPath, function(req, res) {
			res.sendFile(fileMap[serverPath], sendFileOpts);
		});
	});

	io = ioP;

	io.sockets.on('connection', function (socket) {
		clientKnownChannels[socket.id] = [];

		var timeoutId;

		socket.on('disconnect', function() {
			timeoutId = setTimeout(function () {
				debug("cleaning client channels of " + socket.id);
				delete clientChannels[socket.id];   //cleaning up in disconnect
				delete clientKnownChannels[socket.id]; //cleaning up in disconnect
			}, 300000); // after five minutes, get rid of client channels
		});

		socket.on('reconnect', function () {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			var thisClientChnls = clientChannels[socket.id];
			if (!thisClientChnls) {
				//TODO ask client to reexpose channels
				socket.emit('reexposeChannels');
			} else {
				var index = thisClientChnls.length;
				while(index--) {
					socket.emit('clientChannelCreated', thisClientChnls[index].name);
				}
			}
		})
	});

	var authProcess = function (data, callback, socket) {
		if (serverChannels.hasOwnProperty(data.name)) {
			var authFn = serverChannels[data.name].authFn;
			if (typeof authFn === 'function') { // check whether this is private channel
				serverChannels[data.name].authFn.call(socket, data.handshake, callback);
			} else {
				callback(true);
			}
		} else {
			socket.emit('channelDoesNotExist', {name: data.name});
		}
	};

	rpcInstance.masterChannel = io.of('/rpc-master')
		.on('connection', function (socket) {

			socket.on('load channel', function (data) {
				var callback = function (authorized) {
					if (authorized) {
						var channel = serverChannels[data.name];

						if (data.cachedDate && data.cachedDate > runDate) {
							socket.emit('channelFns', {name: data.name});
						} else {
							var channelFnPayload;

								if (clientKnownChannels[socket.id].indexOf(channel.tplId) !== -1) {
									channelFnPayload = {name: data.name, tplId: channel.tplId}; //channel template is known to the client
								} else {
									channelFnPayload = {name: data.name, fnNames: channel.fnNames, tplId: channel.tplId};
									clientKnownChannels[socket.id].push(channel.tplId);
								}

							socket.emit('channelFns', channelFnPayload);
						}
					} else {
						socket.emit('AuthorizationFailed', data.name);
					}
				};
				authProcess(data, callback, socket);
			});

			socket.on('load channelList', function () {
				socket.emit('channels', { list: getChannelNames() });
			});

			socket.on('exposeChannel', function (data) {   // client wants to expose a channel
				var clId = socket.id;
				debug("client with id " + clId +" exposed rpc channel " + data.name);
				var channel = getClientChannel(clId, data.name);
				channel.dfd = channel.dfd || Promise.defer();

				channel.fns = channel.fns || {};
				channel.socket = io.of('/rpcC-'+data.name + '/' + socket.id);  //rpcC stands for rpc Client
				data.fns.forEach(function (fnName) {
					channel.fns[fnName] = function () {
						invocationCounter++;
						channel.socket.emit('call',
							{Id: invocationCounter, fnName: fnName, args: Array.prototype.slice.call(arguments, 0)}
						);
						deferreds[invocationCounter] = Promise.defer();
						return deferreds[invocationCounter].promise;
					};
				});
				channel.socket.on('connection', function (socket) {

					socket.on('resolve', function (data) {
						deferreds[data.Id].resolve(data.value);
						callToClientEnded(data.Id);
					});
					socket.on('reject', function (data) {
						deferreds[data.Id].reject(data.reason);
						callToClientEnded(data.Id);
					});

					socket.on('reconnect', function () {
						//not sure about the deferred in this case-it should be there ready for being resolved/rejected,
						// but who will reset it?
						debug("reconnected to client chnl " + data.name);
						channel.dfd.resolve(channel.fns);

					});

					debug("client connected to its own rpc channel " + data.name);
					channel.dfd.resolve(channel.fns);

				});

				socket.emit('clientChannelCreated', data.name);

			});

			socket.emit('serverRunDate', runDate);
		}
	);

	return rpcInstance;
}

createServer.client = require('./client/socket.io-rpc-client-node.js');

module.exports = createServer;
