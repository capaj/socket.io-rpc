var when = require('when');

var runDate = new Date();
var io;
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

var getFnNames = function (channelName) {
    var names = [];
    for(var fnName in serverChannels[channelName].fns){
        names.push(fnName);
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
    if (authFn) {
        this.authFn = authFn;
    }
    this.authenticated = {};
    this._socket = io.of('/rpc-'+name);
    var self = this;
    this._socket.on('connection', function (socket) {
        var invocationRes = function (data) {
            if (toExpose.hasOwnProperty(data.fnName) && typeof toExpose[data.fnName] === 'function') {
                var retVal = toExpose[data.fnName].apply(socket, data.args);

                if (when.isPromiseLike(retVal)) {    // this is async function, so we will emit 'return' after it finishes
                    //async - promise as a return value indicates that method is async
                    retVal.then(function (asyncRetVal) {
                        socket.emit('return', { Id: data.Id, value: asyncRetVal });
                    }, function (error) {
						if (error instanceof Error) {
							error = error.toString();
						}
						socket.emit('error', { Id: data.Id, reason: error });

                    });
                } else {
					//synchronous
					if (retVal instanceof Error) {
						socket.emit('error', { Id: data.Id, reason: retVal.toString() });
					} else {
						socket.emit('return', { Id: data.Id, value: retVal });
					}
                }

            } else {
                socket.emit('error', {Id: data.Id, reason: 'no such function has been exposed: ' + data.fnName });
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
    createServer: function createMaster(ioP, app) {
        if (app) {
            app.get('/rpc/rpc-client.js', function (req, res) {
                res.sendfile('node_modules/socket.io-rpc/socket.io-rpc-client.js');
            });
            app.get('/rpc/rpc-client-angular.js', function (req, res) {
                res.sendfile('node_modules/socket.io-rpc/socket.io-rpc-client-angular.js');
            });
            app.get('/rpc/when.js', function (req, res) {
                res.sendfile('node_modules/when/when.js');
            });
        }
		io = ioP;

		io.sockets.on('connection', function (socket) {
			socket.on('disconnect', function() {
				delete clientChannels[socket.id];
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
							serverChannels[data.name].authenticated[socket.id] = true;  // we don't need any value here, existence of the ID in this object means that client is authorized
							if (data.cachedDate && data.cachedDate > runDate) {
								socket.emit('channelFns', {name: data.name, upToDate: true});
							} else {
								socket.emit('channelFns', {name: data.name, fnNames: getFnNames(data.name)});
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
                    channel.dfd = channel.dfd || when.defer();
//                    channel.deferred = channel.deferred || when.defer();
                    channel.fns = channel.fns || {};
                    channel.socket = io.of('/rpcC-'+data.name + '/' + socket.id);  //rpcC stands for rpc Client
                    data.fns.forEach(function (fnName) {
                        channel.fns[fnName] = function () {
                            invocationCounter++;
                            channel.socket.emit('call',
                                {Id: invocationCounter, fnName: fnName, args: Array.prototype.slice.call(arguments, 0)}
                            );
                            deferreds[invocationCounter] = when.defer();
                            return deferreds[invocationCounter].promise;
                        };
                    });
                    channel.socket.on('connection', function (socket) {

                        socket.on('return', function (data) {
                            deferreds[data.Id].resolve(data.value);
                            callToClientEnded(data.Id);
                        });
                        socket.on('error', function (data) {
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
     * @param {Function} [authFn] when provided, channel will require authentication
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
            channel.dfd = when.defer();

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
