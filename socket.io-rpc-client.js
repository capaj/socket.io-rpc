// RPC client
var RPC = (function (rpc) {
    var counter = 0;
    var channels = {};
    var deferreds = {};
    var baseURL;
    var rpcMaster;
    var loadChannel = function (name) {
        rpcMaster.emit('load channel', name);
        channels[name]._loadDef = channels[name]._loadDef || Q.defer();
        channels[name]._socket = io.connect(baseURL + '/rpc-' + name)
            .on('return', function (data) {
                deferreds[data.toId].resolve(data.value);
            })
            .on('error', function (data) {
                deferreds[data.toId].reject(data.reason);
            });

    };

    rpc.connect = function (url) {
        baseURL = url;
        rpcMaster = io.connect(url + '/rpc-master');
        rpcMaster.__channelListLoad = Q.defer();
        rpcMaster
            .on('channels', function (data) {
                var name = data.list.pop();
                while(name) {
                    channels[name] = {};
                    loadChannel(name);
                    name = data.list.pop();
                }
                rpcMaster.__channelListLoad.resolve(channels);
            })
            .on('channelFns', function (data) {
                var channelObj = channels[data.name];
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
    };

    rpc.allChannelsLoaded = function (func) {
        var promises = [];
        for(var name in channels){
            var channel = channels[name];
            promises.push(channel._loadDef.promise)
        }
        Q.all(promises).then(function () {
            func();
        })
    };
    rpc.onChannelLoaded = function (name, callback) {
        rpcMaster.__channelListLoad.promise.then(function (channels) {
            channels[name]._loadDef = channels[name]._loadDef || Q.defer();

            channels[name]._loadDef.promise.then(function (channelObj) {
                callback(channelObj);
            });
        })


    };

    return rpc;
}(RPC || {}));