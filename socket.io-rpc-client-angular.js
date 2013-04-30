angular.module('RPC', []).factory('$rpc', function ($rootScope, $q) {
    var counter = 0;
    var serverChannels = {};
    var clientChannels = {};
    var deferreds = {};
    var baseURL;
    var rpcMaster;
    var _loadChannel = function (name, handshakeData) {
        rpcMaster.emit('load channel', {name: name, handshake: handshakeData});
        if (!serverChannels.hasOwnProperty(name)) {
            serverChannels[name] = {};
        }
        var channel = serverChannels[name];
        channel._loadDef = $q.defer();
        channel._socket = io.connect(baseURL + '/rpc-' + name, handshakeData)
            .on('return', function (data) {
                deferreds[data.toId].resolve(data.value);
                $rootScope.$apply();
            })
            .on('error', function (data) {
                deferreds[data.toId].reject(data.reason);
                $rootScope.$apply();

            })
            .on('connect_failed', function (reason) {
                console.error('unable to connect to namespace ', reason);
                channel._loadDef.reject(reason);
                $rootScope.$apply();

            });
        return channel._loadDef.promise;
    };

    var connect = function (url) {
        if (!rpcMaster && url) {
            baseURL = url;
            rpcMaster = io.connect(url + '/rpc-master')
                .on('channelFns', function (data) {
                    var channelObj = serverChannels[data.name];
                    data.fnNames.forEach(function (fnName) {
                        channelObj[fnName] = function () {
                            counter++;
                            channelObj._socket.emit('invocation',
                                {Id: counter, fnName: fnName, argsArray: Array.prototype.slice.call(arguments, 0)}
                            );
                            deferreds[counter] = $q.defer();
                            return deferreds[counter].promise;
                        }
                    });

                    channelObj._loadDef.resolve(channelObj);
                    $rootScope.$apply();

                })
                .on('channelDoesNotExist', function (data) {
                    var channelObj = serverChannels[data.name];
                    channelObj._loadDef.reject();
                    console.warn("no channel under name: " + data.name);
                    $rootScope.$apply();

                })
                .on('client channel created', function (name) {
                    var channel = clientChannels[name];
                    var socket = io.connect(baseURL + '/rpcC-' + name + '/' + rpcMaster.socket.sessionid);  //rpcC stands for rpc Client
                    channel.socket = socket;
                    socket.on('invocation', function (data) {
                        var exposed = channel.fns;
                        if (exposed.hasOwnProperty(data.fnName) && typeof exposed[data.fnName] === 'function') {
                            var that = exposed['this'] || exposed;
                            var retVal = exposed[data.fnName].apply(that, data.argsArray);
                            if (retVal) {
                                //TODO investigate if the next block could be changed to $q.when() call
                                if (typeof retVal.then === 'function') {    // this is async function, so we will emit 'return' after it finishes
                                    //promise must be returned in order to be treated as async
                                    retVal.then(function (asyncRetVal) {
                                        socket.emit('return', { toId: data.Id, value: asyncRetVal });
                                    }, function (error) {
                                        socket.emit('error', { toId: data.Id, reason: error });
                                    });
                                } else {
                                    socket.emit('return', { toId: data.Id, value: retVal });
                                }
                            }

                        } else {
                            socket.emit('error', {toId: data.Id, reason: 'no such function has been exposed: ' + data.fnName });
                        }
                    });
                    channel.deferred.resolve(channel);
                });

        } else {
            console.warn("ignoring connect command, either url null or already connected");
        }
    };
    return {
        connect: connect,
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
                console.error("no connection to master");
            }

        },
        loadChannel: function (name, handshakeData) {
            return _loadChannel(name, handshakeData);
        },
        expose: function (name, toExpose) { //
            if (!clientChannels.hasOwnProperty(name)) {
                clientChannels[name] = {};
            }
            var channel = clientChannels[name];
            channel.fns = toExpose;
            channel.deferred = $q.defer();
            var fnNames = [];
            for(var fn in toExpose)
            {
                fnNames.push(fn);
            }

            rpcMaster.emit('expose channel', {name: name, fns: fnNames});
            return channel.deferred.promise;
        }
    };
});