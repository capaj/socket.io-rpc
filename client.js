module.exports = function ($rootScope, $log, $q) {
	var nop = function(){};
	var io = require('socket.io-client');
	/**
	 * pseudo constructor, connects to remote server which exposes RPC calls
	 * @param {String} url to connect to, for example http://localhost:8080
	 * @param {Object} handshake for global authorization, is passed to socket.io connect method
	 * returns {Socket} master socket namespace which you can use for looking under the hood
	 */
	function RPCBackend(url, handshake) {

		var invocationCounter = 0;
		var endCounter = 0;
		var serverChannels = {};
		var clientChannels = {};
		var deferreds = [];
		var baseURL;
		var rpcMaster;
		var knownTemplates = {};

		var serverRunDate;  // used for invalidating the cache
		var serverRunDateDeferred = $q.defer();
		serverRunDateDeferred.promise.then(function (date) {
			serverRunDate = new Date(date);
		});

		var callEnded = function (Id) {
			if (deferreds[Id]) {
				delete deferreds[Id];
				endCounter++;
				rpc.onEnd(endCounter);
				if (endCounter == invocationCounter) {
					rpc.onBatchEnd(endCounter);
					invocationCounter = 0;
					endCounter = 0;
				}
			}else {
				$log.warn("Deferred Id " + Id + " was resolved/rejected more than once, this should not occur.");
			}
		};

		/**
		 * Generates a 'safe' key for storing cache in client's local storage
		 * @param name
		 * @returns {string}
		 */
		function getCacheKey(name) {
			return 'SIORPC:' + baseURL + '/' + name;
		}

		function cacheIt(key, data) {
			try{
				localStorage[key] = JSON.stringify(data);
			}catch(e){
				$log.warn("Error raised when writing to local storage: " + e); // probably quota exceeded
			}
		}

		var _loadChannel = function (name, deferred) {
			if (!serverChannels.hasOwnProperty(name)) {
				serverChannels[name] = {};
			}
			var channel = serverChannels[name];
			channel._loadDef = deferred;

			serverRunDateDeferred.promise.then(function () {

				var cacheKey = getCacheKey(name);
				var cached = localStorage[cacheKey];
				if (cached) {
					cached = JSON.parse(cached);
					if (serverRunDate < new Date(cached.cDate)) {
						connectToServerChannel(channel, name);
						registerRemoteFunctions(cached, false); // will register functions from cached manifest
					} else {
						//cache has been invalidated
						delete localStorage[cacheKey];
						rpcMaster.emit('load channel', {name: name});
					}
				} else {
					rpcMaster.emit('load channel', {name: name});
				}
			});

			return channel._loadDef.promise;
		};

		var registerRemoteFunctions = function (data, storeInCache) {
			var channel = serverChannels[data.name];
			var remoteMethodInvocation = function (fnName) {
				channel[fnName] = function () {
					invocationCounter++;
					channel._socket.emit('call',
						{Id: invocationCounter, fnName: fnName, args: Array.prototype.slice.call(arguments, 0)}
					);
					if (invocationCounter == 1) {
						rpc.onBatchStarts(invocationCounter);
					}
					rpc.onCall(invocationCounter);
					deferreds[invocationCounter] = $q.defer();
					return deferreds[invocationCounter].promise;
				};
			};

			if (data.fnNames) {
				if (data.tplId) {
					//store the template
					knownTemplates[data.tplId] = data.fnNames;
				}
				data.fnNames.forEach(remoteMethodInvocation);   //initialize from incoming data
			} else {
				knownTemplates[data.tplId].forEach(remoteMethodInvocation); //this has to be initialized from known template
			}


			channel._loadDef.resolve(channel);
			if (storeInCache !== false) {
				$rootScope.$apply();
				data.cDate = new Date();    // here we make a note of when the channel cache was saved
				cacheIt(getCacheKey(data.name), data)
			}

		};

		/**
		 *
		 * @param {Object} channel
		 * @param {String} name
		 */
		var connectToServerChannel = function (channel, name) {
			if (channel._socket) {
				$log.info('connect to server channel ignored, because we already have _socket' + name);
				return; //this was fired upon reconnect, so let's not register any more event subscribers
			}
			var reconDfd = $q.defer();

			channel._socket = io.connect(baseURL + '/rpc-' + name)
				.on('resolve', function (data) {
					deferreds[data.Id].resolve(data.value);
					callEnded(data.Id);
				})
				.on('reject', function (data) {
					if (data && data.Id) {
						deferreds[data.Id].reject(data.reason);
						//$log.error("Call " + name + ':' + data.Id + " is rejected, reason ", data.reason);

						callEnded(data.Id);
					} else {
						$log.error("Channel: " + name + "Reject response doesn't have id: ", data);
					}
				})
				.on('connectFailed', function (reason) {
					$log.error('unable to connect to namespace ' + name, reason);
					channel._loadDef.reject(reason);
				})
				.on('disconnect', function (data) {
					reconDfd = $q.defer();

					channel._loadDef = reconDfd;
					$log.warn("Server channel " + name + " disconnected.");
				})
				.on('reconnect', function () {
					$log.info('reconnected channel' + name);
					_loadChannel(name, reconDfd);
				});
		};

		var rpc = {
			loadAllChannels: function () {
				if (rpcMaster) {
					rpcMaster.__channelListLoad = $q.defer();
					rpcMaster.emit('load channelList');
					rpcMaster
						.on('channels', function (data) {
							var name = data.list.pop();
							while(name) {
								serverChannels[name] = {};
								_loadChannel(name);
								name = data.list.pop();
							}
							rpcMaster.__channelListLoad.resolve(serverChannels);
							$rootScope.$apply();

						});
					return rpcMaster.__channelListLoad.promise;
				} else {
					$log.error("no connection to master");
				}

			},
			/**
			 * for a particular channel this will connect and prepare the channel for use, if called more than once for one
			 * channel, it will return it's promise
			 * @param {string} name
			 * @returns {promise}
			 */
			loadChannel: function (name) {
				if (serverChannels.hasOwnProperty(name)) {
					return serverChannels[name]._loadDef.promise;
				} else {
					var def = $q.defer();
					_loadChannel(name, def);
					return def.promise;
				}
			},
			/**
			 * @param {string} name of the channel
			 * @param {Object} toExpose object with functions as values
			 * @returns {Promise} a promise confirming that server is connected and can call the client, throws an error if already exposed
			 */
			expose: function (name, toExpose) { //
				if (clientChannels.hasOwnProperty(name)) {
					throw new Error('Failed to expose channel, this client channel is already exposed');
				}

				var channel = {fns: toExpose, deferred: $q.defer()};
				clientChannels[name] = channel;

				var fnNames = [];
				for(var fn in toExpose)
				{
					if (fn === '_socket') {
						throw new Error('Failed to expose channel, _socket property is reserved for socket namespace');
					}
					fnNames.push(fn);
				}
				var expose = function() {
					rpcMaster.emit('exposeChannel', {name: name, fns: fnNames});
				};

				if (rpcMaster.connected) {
					// when no on connect event will be fired, we just expose the channel immediately
					expose();
				}

				rpcMaster
					.on('disconnect', function () {
						channel.deferred = $q.defer();
					})
					.on('connect', expose)
					.on('reexposeChannels', expose);	//not sure if this will be needed, since simulating socket.io
				// reconnects is hard, leaving it here for now

				return channel.deferred.promise;
			},
			/**
			 * @param name
			 * @returns {Object} client channel
			 */
			getClientChannel: function(name) {
				return clientChannels[name];
			},
			//These are internal callbacks of socket.io-rpc, use them if you want to implement something like a global loader indicator
			onBatchStarts: nop, //called when invocation counter equals 1
			onBatchEnd: nop,    //called when invocation counter equals endCounter
			onCall: nop,        //called when invocation counter equals endCounter
			onEnd: nop         //called when one call is returned
		};

		baseURL = url;
		rpcMaster = io.connect(url + '/rpc-master', handshake)
			.on('serverRunDate', function (runDate) {
				serverRunDateDeferred.resolve(runDate);
				$rootScope.$apply();
			})
			.on('channelFns', function (data, storeInCache) {
				var name = data.name;
				var channel = serverChannels[name];
				connectToServerChannel(channel, name);
				registerRemoteFunctions(data, storeInCache);
			})
			.on('channelDoesNotExist', function (data) {

				var channel = serverChannels[data.name];
				channel._loadDef.reject();
				$log.warn("no channel under name: " + data.name);
				$rootScope.$apply();

			})
			.on('clientChannelCreated', function (name) {

				var channel = clientChannels[name];
				var socket = io.connect(baseURL + '/rpcC-' + name + '/' + rpcMaster.io.engine.id);  //rpcC stands for rpc Client
				channel._socket = socket;
				socket.on('call', function (data) {
					var exposed = channel.fns;
					if (exposed.hasOwnProperty(data.fnName) && typeof exposed[data.fnName] === 'function') {

						var retVal = exposed[data.fnName].apply(this, data.args);
						if (typeof retVal === 'object' && typeof retVal.then === 'function') {
							//async - promise must be returned in order to be treated as async
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
				});
				channel.deferred.resolve(channel);

			});
		rpc.masterChannel = rpcMaster;

		if (!RPCBackend.defaultBackend) {
			RPCBackend.defaultBackend = rpc;   //the first rpc connection is the default, if you want, you can set some other
		}
		return rpc;

	}

	return RPCBackend;
};