var Promise = require('bluebird');
var _ = require('lodash');

var runDate = new Date();
var io;

//channel template support vars
var channelTemplates = {};
var channelTemplatesSize = 0;
var clientKnownChannels = {};

var options = { useChannelTemplates: true };        //object of options which is fed input on createServer method call
var deferreds = [];
var serverChannels = {};
var clientChannels = {};
var getClientChannel = function (id, name) {
    if (!clientChannels.hasOwnProperty(id)) {
        clientChannels[id] = {};
    }
    if (!clientChannels[id].hasOwnProperty(name)) {
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
 *
 * @param {String} name
 * @param {Object} toExpose
 * @param {Function} [authFn] should return boolean value, if true access to a channel is allowed
 * @returns {RpcChannel}
 * @constructor
 */
var RpcChannel = function (name, toExpose, authFn) {      //
    this.fns = toExpose;

    /**
     * @type {Array<String>}
     */
    this.fnNames = [];

    for (var fnName in toExpose) {
        this.fnNames.push(fnName);
    }
    Object.freeze(toExpose);    //we won't support adding new methods to a channel after creation

    if (options.useChannelTemplates) {

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

    }
    if (authFn) {
        this.authFn = authFn;
    }
    this.authenticated = {};
    this._socket = io.of('/rpc-' + name);
    var self = this;
    this._socket.on('connection', function (socket) {
        var invocationRes = function (data) {
            if (toExpose.hasOwnProperty(data.fnName) && typeof toExpose[data.fnName] === 'function') {
                var retVal = toExpose[data.fnName].apply(socket, data.args);
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

        if (authFn) {
            if (self.authenticated[socket.id]) {
                socket.on('call', invocationRes);
                socket.on('disconnect', function () {
                    delete self.authenticated[socket.id];   // cleaning up
                });
            } else {
                socket.emit('connect_failed', "Authentication for channel failed");
                socket.disconnect();    // forcibly disconnect
            }
        } else {
            socket.on('call', invocationRes);
        }

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
        console.warn("Deferred Id " + Id + " was resolved/rejected more than once, this should not occur.");
    }
};

module.exports = {
    /**
     * @param {Manager} ioP socket.io manager instance returned by require('socket.io').listen(server);
     * @param {Express|Object} [opts] either an object which will extend default options or express app
     * @returns {Emitter|*}
     */
    createServer: function createMaster(ioP, opts) {

        if (opts) {
            var app = opts.expressApp || opts;
            if (app.get) {
                app.get('/rpc/rpc-client.js', function (req, res) {
                    res.sendfile('./node_modules/socket.io-rpc/socket.io-rpc-client.js');
                });
                app.get('/rpc/rpc-client-angular.js', function (req, res) {
                    res.sendfile('./node_modules/socket.io-rpc/socket.io-rpc-client-angular.js');
                });
                app.get('/rpc/when.js', function (req, res) {   //used only for regular clients, angular client has it's own promise library
                    res.sendfile('./node_modules/when/when.js');
                });
            } else {
                console.warn('you should provide express app or an object with express app on property expressApp');
            }
            if (!_.isFunction(opts)) {
                _.extend(options, opts);
            }
        }

		io = ioP;


		io.sockets.on('connection', function (socket) {
			clientKnownChannels[socket.id] = [];
            socket.on('disconnect', function() {
				delete clientChannels[socket.id];   //cleaning up in disconnect
                delete clientKnownChannels[socket.id]; //cleaning up in disconnect
			});
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

        return io.of('/rpc-master')
            .on('connection', function (socket) {
				socket.on('authenticate', function (data) {	//gets called everytime even when functions are cached
					var callback = function (authorized) {
						if (authorized) {
							serverChannels[data.name].authenticated[socket.id] = true;  // we don't need any value here, existence of the ID in this object means that client is authorized
							socket.emit('authenticated', {name: data.name});
						} else {
							socket.emit('AuthorizationFailed', data.name);
						}
					};
					authProcess(data, callback, socket);

				});

				socket.on('load channel', function (data) {
					var callback = function (authorized) {
						if (authorized) {
                            var channel = serverChannels[data.name];
                            channel.authenticated[socket.id] = true;  // we don't need any value here, existence of the ID in this object means that client is authorized
							if (data.cachedDate && data.cachedDate > runDate) {
								socket.emit('channelFns', {name: data.name, upToDate: true});
							} else {
                                var channelFnPayload;
                                if (options.useChannelTemplates) {
                                    if (clientKnownChannels[socket.id].indexOf(channel.tplId) !== -1) {
                                        channelFnPayload = {name: data.name, tplId: channel.tplId}; //channel template is known to the client
                                    } else {
                                        channelFnPayload = {name: data.name, fnNames: channel.fnNames, tplId: channel.tplId};
                                        clientKnownChannels[socket.id].push(channel.tplId);
                                    }
                                } else {
                                    channelFnPayload = {name: data.name, fnNames: channel.fnNames};
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

                socket.on('expose channel', function (data) {   // client wants to expose a channel
                    console.log("client with ID" + socket.id +" exposed rpc channel " + data.name);
                    var channel = getClientChannel(socket.id, data.name);
                    channel.dfd = channel.dfd || Promise.defer();
//                    channel.deferred = channel.deferred || when.defer();
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

//                        console.log("client connected to its own rpc channel " + data.name);
                        channel.dfd.resolve(channel.fns);

                    });

                    socket.emit('client channel created', data.name);

                });

                socket.emit('serverRunDate', runDate);
            }
        );
    },
    /**
     *  Makes a channel available for clients
     * @param {String} name
     * @param {Object} toExpose
     * @param {Function} [authFn] when provided, channel will call it on any new connected client
	 * @returns {SocketNamespace}
     */
    expose: function (name, toExpose, authFn) {
        if (serverChannels[name]) {
            console.warn("This channel name(" + name + ") is already exposed-ignoring the command.");
			return serverChannels[name]._socket;
        } else {
            var channel = new RpcChannel(name, toExpose, authFn);
			if (toExpose._socket) {
				throw new Error('Failed to expose channel, _socket property is reserved for socket namespace');
			}
			serverChannels[name] = channel;
			return channel._socket;
		}
    },
    /**
     *
     * @param socket
     * @param name
     * @returns {Promise}
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
            });
        }
        return channel.dfd.promise;
    }
};
