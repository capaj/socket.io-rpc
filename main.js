var Q = require('q');
var io;
var deferreds = {};
var counter = 0;
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

var RpcChannel = function (name, toExpose) {      //
    this.fns = toExpose;
    this._socket = io
        .of('/rpc-'+name)
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

//        serverChannels[channel] = ioChannel;
    return this;
};

module.exports = {
    createMaster: function createMaster(ioP, app) {
        if (app) {
            app.get('/rpc-client.js', function (req, res) {
                res.sendfile('node_modules/socket.io-rpc/socket.io-rpc-client.js');
            });
        }
        io = ioP;
        var rpcMaster = io
            .of('/rpc-master')
            .on('connection', function (masterSocket) {
                masterSocket.on('load channel', function (name) {
                    if (serverChannels.hasOwnProperty(name)) {
                        masterSocket.emit('channelFns', {name: name, fnNames: getFnNames(name)});
                    } else {
                        masterSocket.emit('channelDoesNotExist', {name: name})
                    }
                });
                masterSocket.on('load channelList', function () {
                    masterSocket.emit('channels', { list: getChannelNames() });
                });
                masterSocket.on('expose channel', function (data) {   // client wants to expose a channel
                    console.log("client with ID" + masterSocket.id +" exposed rpc channel " + data.name);
                    var channel = getClientChannel(masterSocket.id, data.name);

//                    console.log(socket);
//                    channel.deferred = channel.deferred || Q.defer();
                    channel.fns = channel.fns || {};
                    channel.socket = io.of('/rpcC-'+data.name + '/' + masterSocket.id);  //rpcC stands for rpc Client
                    data.fns.forEach(function (fnName) {
                        channel.fns[fnName] = function () {
                            counter++;
                            channel.socket.emit('invocation',
                                {Id: counter, fnName: fnName, argsArray: Array.prototype.slice.call(arguments, 0)}
                            );
                            deferreds[counter] = Q.defer();
                            return deferreds[counter].promise;
                        }
                    });
                    channel.socket.on('connection', function (socket) {
                        socket.on('return', function (data) {
                            deferreds[data.toId].resolve(data.value);
                        });
                        socket.on('error', function (data) {
                            deferreds[data.toId].reject(data.reason);
                        });

                        console.log("client connected to its own rpc channel " + data.name);
                        channel.onConnection(socket, channel.fns);
//                        channel.deferred.resolve(channel);
                    });

                    masterSocket.emit('client channel created', data.name)

                });
            });
        return rpcMaster;
    },
    expose: function (name, toExpose) {
        var channel = new RpcChannel(name, toExpose);
        serverChannels[name] = channel;
    },
    onClientChannelInit: function (id, name, callback) {
//        if (options.name) {
//
//        }

        var channel = getClientChannel(id, name);
        channel.onConnection = callback;
    }
};