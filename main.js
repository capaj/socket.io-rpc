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
 * @param [Function] authFn
 * @returns {*}
 * @constructor
 */
var RpcChannel = function (name, toExpose, authFn) {      //
    this.fns = toExpose;
    if (authFn) {
        this.authFn = authFn;
    }
    this.authenticated = {};
    this._socket = io.of('/rpc-'+name);
    var that = this;
    this._socket.on('connection', function (socket) {
        var invocationRes = function (data) {
            if (toExpose.hasOwnProperty(data.fnName) && typeof toExpose[data.fnName] === 'function') {
                var that = toExpose['this'] || toExpose;
                var retVal = toExpose[data.fnName].apply(that, data.args);
                if (retVal) {
                    if (when.isPromise(retVal)) {    // this is async function, so we will emit 'return' after it finishes
                        //promise must be returned in order to be treated as async
                        retVal.then(function (asyncRetVal) {
                            socket.emit('return', { Id: data.Id, value: asyncRetVal });
                        }, function (error) {
                            socket.emit('error', { Id: data.Id, reason: error });
                        });
                    } else {
                        socket.emit('return', { Id: data.Id, value: retVal });
                    }
                }       // when no value is returned we don't do anything
            } else {
                socket.emit('error', {Id: data.Id, reason: 'no such function has been exposed: ' + data.fnName });
            }
        };

        if (that.authFn) {
            if (typeof that.authenticated[socket.id] !== "undefined") {
                socket.on('call', invocationRes);
                socket.on('disconnect', function () {
                    delete that.authenticated[socket.id];   // cleaning up
                });
            } else {
                socket.emit('connect_failed', "Authentication for channel failed");
                socket.disconnect();    // forcibly disconnect
            }
        } else {
            socket.on('call', invocationRes);
        }

    });

//        serverChannels[channel] = ioChannel;
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
        return io
            .of('/rpc-master')
            .on('connection', function (socket) {
                socket.on('load channel', function (data) {
                    if (serverChannels.hasOwnProperty(data.name)) {
                        var callback = function (authorized) {
                            if (authorized) {
                                serverChannels[data.name].authenticated[socket.id] = null;  // we don't need any value here, existence of the ID in this object means that client is authorized
                                if (data.cachedDate && data.cachedDate > runDate) {
                                    socket.emit('channelFns', {name: data.name, upToDate: true});
                                } else {
                                    socket.emit('channelFns', {name: data.name, fnNames: getFnNames(data.name)});
                                }
                            } else {
                                socket.emit('AuthorizationFailed', data.name);
                            }
                        };
                        var authFn = serverChannels[data.name].authFn;
                        if (typeof authFn === 'function') { // check whether this is private channel
                            serverChannels[data.name].authFn(data.handshake, callback);
                        } else {
                            callback(true);
                        }
                    } else {
                        socket.emit('channelDoesNotExist', {name: data.name});
                    }
                });
                socket.on('load channelList', function () {
                    socket.emit('channels', { list: getChannelNames() });
                });
                socket.on('expose channel', function (data) {   // client wants to expose a channel
                    console.log("client with ID" + socket.id +" exposed rpc channel " + data.name);
                    var channel = getClientChannel(socket.id, data.name);

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

                        console.log("client connected to its own rpc channel " + data.name);
                        channel.onConnection && channel.onConnection(socket, channel.fns);
//                        channel.deferred.resolve(channel);
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
     * @param [auth] when provided, channel will require authentication
     */
    expose: function (name, toExpose, authFn) {
        if (serverChannels[name]) {
            console.warn("This channel name(" + name + ") is already taken-ignoring the command.");
        } else {
            var channel = new RpcChannel(name, toExpose, authFn);
            serverChannels[name] = channel;
        }
    },
    loadClientChannel: function (socket, name, callback) {
        var channel = getClientChannel(socket.id, name);
        channel.onConnection = callback;
        socket.on('disconnect', function () {
            delete clientChannels[socket.id];
        });
    }
};
