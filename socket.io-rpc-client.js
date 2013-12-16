// RPC client
var RPC = (function (rpc) {
    var noop = function(){};
    var invocationCounter = 0;
    var endCounter = 0;
    var serverChannels = {};
    var clientChannels = {};
    var deferreds = [];
    var baseURL;
    var rpcMaster;
    var serverRunDate;  // used for invalidating the cache
    var serverRunDateDeferred = when.defer();
    serverRunDateDeferred.promise.then(function (date) {
        serverRunDate = new Date(date);
    });
	//These are internal callbacks of socket.io-rpc, use them if you want to implement something like a global loader indicator
    rpc.onBatchStarts = noop;	//called when invocation counter equals 1
    rpc.onBatchEnd = noop;		//called when invocation counter equals endCounter
    rpc.onCall = noop;			//called when invocation counter equals endCounter
    rpc.onEnd = noop;			//called when one call is returned

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
            console.warn("Deferred Id " + Id + " was resolved/rejected more than once, this should not occur.");
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
            console.warn("Error raised when writing to local storage: " + e); // probably quoata exceeded
        }
    }

    var _loadChannel = function (name, handshakeData, deferred) {
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
					if (handshakeData) {
						rpcMaster.emit('authenticate', {name: name, handshake: handshakeData});
						channel.cached = cached;
					} else {
                        connectToServerChannel(channel, name);
						registerRemoteFunctions(cached, false); // will register functions from cached manifest
					}
                } else {
                    //cache has been invalidated
                    delete localStorage[cacheKey];
                    rpcMaster.emit('load channel', {name: name, handshake: handshakeData});
                }
            } else {
                rpcMaster.emit('load channel', {name: name, handshake: handshakeData});
            }
        });

        return channel._loadDef.promise;
    };

    var registerRemoteFunctions = function (data, storeInCache) {
		var channel = serverChannels[data.name];

		data.fnNames.forEach(function (fnName) {
            channel[fnName] = function () {
                invocationCounter++;
                channel._socket.emit('call',
                    {Id: invocationCounter, fnName: fnName, args: Array.prototype.slice.call(arguments, 0)}
                );
                if (invocationCounter == 1) {
                    rpc.onBatchStarts(invocationCounter);
                }
                rpc.onCall(invocationCounter);
                deferreds[invocationCounter] = when.defer();
                return deferreds[invocationCounter].promise;
            };
        });

        channel._loadDef.resolve(channel);
        if (storeInCache !== false) {
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

		channel._socket = io.connect(baseURL + '/rpc-' + name)
			.on('return', function (data) {
				deferreds[data.Id].resolve(data.value);
				callEnded(data.Id);
			})
			.on('error', function (data) {
				if (data && data.Id) {
					deferreds[data.Id].reject(data.reason);
					callEnded(data.Id);
				} else {
					console.error("Unknown error occured on RPC socket connection");
				}
			})
			.on('connect_failed', function (reason) {
				console.error('unable to connect to namespace ', reason);
				channel._loadDef.reject(reason);
			})
			.on('disconnect', function (data) {
				delete serverChannels[name];
				console.warn("Server channel " + name + " disconnected.");
			});
	};

    /**
     * connects to remote server which exposes RPC calls
     * @param {String} url to connect to, for example http://localhost:8080
     * @param {Object} handshake for global authorization
     * returns {Socket} master socket
     */
    var connect = function (url, handshake) {
        if (!rpcMaster && url) {
            baseURL = url;
            rpcMaster = io.connect(url + '/rpc-master', handshake)
                .on('serverRunDate', function (runDate) {
                    serverRunDateDeferred.resolve(runDate);
                })
				.on('authenticated', function (data) {
                    var name = data.name;
                    var channel = serverChannels[name];
                    connectToServerChannel(channel, name);
					registerRemoteFunctions(channel.cached, false); // will register functions from cached manifest
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
                    console.warn("no channel under name: " + data.name);
                })
                .on('client channel created', function (name) {
                    var channel = clientChannels[name];
                    var socket = io.connect(baseURL + '/rpcC-' + name + '/' + rpcMaster.socket.sessionid);  //rpcC stands for rpc Client
                    channel._socket = socket;
                    socket.on('call', function (data) {
                        var exposed = channel.fns;
                        if (exposed.hasOwnProperty(data.fnName) && typeof exposed[data.fnName] === 'function') {
                            var retVal = exposed[data.fnName].apply(this, data.args);

                            if (when.isPromiseLike(retVal)) {
                                //async - promise must be returned in order to be treated as async
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
                    });
                    channel.deferred.resolve(channel);
                });
            return rpcMaster;
        } else {
            console.warn("ignoring connect command, either url of master null or already connected");
        }
    };
    rpc.connect = connect;

    rpc.loadAllChannels = function () {
        if (rpcMaster) {
            rpcMaster.__channelListLoad = when.defer();
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
                });
            return rpcMaster.__channelListLoad.promise;
        } else {
            console.error("no connection to master");
        }

    };

    /**
     * for a particular channel this will connect and prepared the channel for use, if called more than once for one
     * channel, it will return it's instance
     * @param {string} name
     * @param {*} [handshakeData] custom param for authentication
     * @returns {when.promise}
     */
    rpc.loadChannel = function (name, handshakeData) {
        if (serverChannels.hasOwnProperty(name)) {
            return serverChannels[name]._loadDef.promise;
        } else {
            var def = when.defer();
            _loadChannel(name, handshakeData, def);
            return def.promise;
        }
    };

    /**
     * @param name {string}
     * @param toExpose {Object} object with functions as values
     * @returns {when.promise}
     */
    rpc.expose = function (name, toExpose) { //
        if (!clientChannels.hasOwnProperty(name)) {
            clientChannels[name] = {};
        }
        var channel = clientChannels[name];
        channel.fns = toExpose;
        channel.deferred = when.defer();
        var fnNames = [];
        for(var fn in toExpose)
        {
			if (fn === '_socket') {
				throw new Error('Failed to expose channel, _socket property is reserved for socket namespace');
			}
			fnNames.push(fn);
        }

        rpcMaster.emit('expose channel', {name: name, fns: fnNames});
        return channel.deferred.promise;
    };

    return rpc;
}(RPC || {}));
