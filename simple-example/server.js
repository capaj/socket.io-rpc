var express = require('express');

var app = module.exports = express();
app.use(require('morgan')('dev'));

app.set('port', 8081);

var server = app.listen(app.get('port'));
var sendFileOpts = {
	root: './'
};
app.use(express.static(__dirname));

// this block is not normally needed, only we don't have these installed through NPM for tests, so paths differ
app.get('/es5-shim.js', function (req, res) {
    res.sendFile(__dirname + 'es5-shim.js');
});
app.get('/angular.js', function (req, res) {
    res.sendFile(__dirname + '/angular.js');
});
app.get('/rpc/rpc-client.js', function (req, res) {  // this is not normally needed
    res.sendFile('socket.io-rpc-client.js', sendFileOpts);
});
app.get('/rpc/rpc-client-angular.js', function (req, res) {  // this is not normally needed
    res.sendFile('socket.io-rpc-client-angular.js', sendFileOpts);
});


var Promise = require('bluebird');
var rpc = require('../main.js');
var io = require('socket.io').listen(server);
						//channelTemplates true is default, though you can change it, I would recommend leaving it to true,
						//				   false is good only when your channels are dynamic so there is no point in caching
var rpcMaster = rpc(io, {channelTemplates: true, expressApp: app})
	.expose('myChannel', {
		//plain JS function
		getTime: function() {
			console.log('Client ID is: ' + this.id);
			return new Date();
		},
		//returns a promise, which when resolved will resolve promise on client-side with the result
		myAsyncTest: function(param) {
			var deffered = Promise.defer();
			setTimeout(function() {
				deffered.resolve("String generated asynchronously serverside with " + param);
			}, 1000);
			return deffered.promise;
		},
		failingMethod: function() {
			var deffered = Promise.defer();
			setTimeout(function() {
				deffered.reject(new Error("Sample error"));
			}, 2000);
			return deffered.promise;
		}
	}, function(handshake, CB) {	//second function/parameter is optional for authenticated channels
		if (handshake.passw == '123') {
			CB(true);
		} else {
			CB(false);
		}
	});

io.sockets.on('connection', function (socket) {
    var intId;

    rpcMaster.loadClientChannel(socket, 'clientChannel').then(function (fns) {
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
    res.sendFile(__dirname  + '/ng.html');
});
app.get('/ie8', function (req, res) {
    res.sendFile(__dirname + '/ie8.html');
});
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

