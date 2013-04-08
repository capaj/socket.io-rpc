// RPC client
var RPC = (function (rpc) {
    var counter = 0;
    var serverChannels = {};
    var clientChannels = {};
    var deferreds = {};
    var baseURL;
    var rpcMaster;
    var _loadChannel = function (name) {
        rpcMaster.emit('load channel', name);
        if (!serverChannels.hasOwnProperty(name)) {
            serverChannels[name] = {};
        }
        var channel = serverChannels[name];
        channel._loadDef = channel._loadDef || Q.defer();
        channel._socket = io.connect(baseURL + '/rpc-' + name)
            .on('return', function (data) {
                deferreds[data.toId].resolve(data.value);
            })
            .on('error', function (data) {
                deferreds[data.toId].reject(data.reason);
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
                            deferreds[counter] = Q.defer();
                            return deferreds[counter].promise;
                        }
                    });

                    channelObj._loadDef.resolve(channelObj);
                })
                .on('channelDoesNotExist', function (data) {
                    var channelObj = serverChannels[data.name];
                    channelObj._loadDef.reject();
                    console.warn("no channel under name: " + data.name);
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
    rpc.connect = connect;

    rpc.loadAllChannels = function () {
        if (rpcMaster) {
            rpcMaster.__channelListLoad = Q.defer();
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

    rpc.loadChannel = function (name) {
        return _loadChannel(name);
    };

    rpc.expose = function (name, toExpose) { //
        if (!clientChannels.hasOwnProperty(name)) {
            clientChannels[name] = {};
        }
        var channel = clientChannels[name];
        channel.fns = toExpose;
        channel.deferred = Q.defer();
        var fnNames = [];
        for(var fn in toExpose)
        {
            fnNames.push(fn);
        }

        rpcMaster.emit('expose channel', {name: name, fns: fnNames});
        return channel.deferred.promise;
    };

    return rpc;
}(RPC || {}));