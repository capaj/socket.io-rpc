var io;
var channels = {};
var getChannelNames = function () {
    var names = [];
    for(var channel in channels){
        names.push(channel);
    }
    return names;
};

var getFnNames = function (channelName) {
    var names = [];
    for(var channel in channels[channelName]){
        names.push(channel);
    }
    return names;
};

module.exports = {
    createMaster: function createMaster(ioP) {
        io = ioP;
        var rpcMaster = io
            .of('/rpc-master')
            .on('connection', function (socket) {
                socket.emit('channels', { list: getChannelNames() });
                socket.on('load channel', function (name) {
                    if (channels.hasOwnProperty(name)) {
                        socket.emit('channelFns', {name: name, fnNames: getFnNames(name)})
                    }
                })
            });
    },
    expose: function (channel, toExpose) {
        ioChannel = io
            .of('/rpc-'+channel)
            .on('connection', function (socket) {
                socket.on('invocation', function (data) {
                    if (toExpose.hasOwnProperty(data.fnName) && typeof toExpose[data.fnName] === 'function') {
                        var that = toExpose['this'] || toExpose;
                        var retVal = toExpose[data.fnName].apply(that, data.argsArray);
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
            });

//        channels[channel] = ioChannel;
        channels[channel] = toExpose;

    }
};