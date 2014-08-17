var express = require('express');

var app = module.exports = express();
app.use(require('morgan')('dev'));

app.set('port', 8081);

var server = app.listen(app.get('port'));

// this block is not normally needed, only we don't have these installed through NPM for tests, so paths differ
app.get('/es5-shim.js', function (req, res) {
    res.sendfile('./tests/es5-shim.js');
});
app.get('/angular.js', function (req, res) {
    res.sendfile('./tests/angular.js');
});
app.get('/rpc/rpc-client.js', function (req, res) {  // this is not normally needed
    res.sendfile('./socket.io-rpc-client.js');
});
app.get('/rpc/rpc-client-angular.js', function (req, res) {  // this is not normally needed
    res.sendfile('./socket.io-rpc-client-angular.js');
});
app.get('/rpc/when.js', function (req, res) {  // this is not normally needed
    res.sendfile('./node_modules/when/when.js');
});


var Promise = require('bluebird');
var rpc = require('../main.js');
var io = require('socket.io').listen(server);

var rpcMaster = rpc.createServer(io, { useChannelTemplates: true, expressApp: app });
rpc.expose('myChannel', {
    //plain JS function
    getTime: function () {
        console.log('Client ID is: ' + this.id);
        return new Date();
    },
    //returns a promise, which when resolved will resolve promise on client-side with the result
    myAsyncTest: function (param) {
        var deffered = Promise.defer();
        setTimeout(function(){
            deffered.resolve("String generated asynchronously serverside with " + param);
        },1000);
        return deffered.promise;
    },
    failingMethod: function () {
        var deffered = Promise.defer();
        setTimeout(function(){
            deffered.reject(new Error("Sample error"));
        },2000);
        return deffered.promise;
    }
//}, function (handshake, CB) {	//second parameter is optional for authenticated channels
//	if (handshake.passw == '123') {
//		CB(true);
//	} else {
//		CB(false);
//	}
});

io.sockets.on('connection', function (socket) {
    var intId;

    rpc.loadClientChannel(socket, 'clientChannel').then(function (fns) {
        intId = setInterval(function() {
            console.log("cl call " + socket.id);

            fns.fnOnClient("calling client ").then(function (ret) {
                console.log("client returned: " + ret);
            });
        }, 5000);
    });

    socket.on('disconnect', function () {
        console.log("disconnected, stop calling it");
        clearInterval(intId);
    });

});

app.get('/ng', function (req, res) {
    res.sendfile('./tests/ng.html');
});
app.get('/ie8', function (req, res) {
    res.sendfile('./tests/ie8.html');
});
app.get('*', function (req, res) {
    res.sendfile('./tests/index.html');
});

