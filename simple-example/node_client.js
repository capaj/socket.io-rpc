var rpcClient = require('../client/socket.io-rpc-client-node.js');
// although when you install from npm, your path shoud be more like: ./node_modules/socket.io-rpc/socket.io-rpc-client-node.js

var backend = rpcClient('http://localhost:8031');

backend.loadChannel('./rpc_channel_test')
	.then(function(channel) {
		channel.getTime().then(function(date) {
			console.log('time on server is: ' + date);

		});
		channel.myAsyncTest('passing string as argument').then(function(retVal) {
			console.log('server returned: ' + retVal);
		}, function(er) {
			console.error('error callback called');
		});
		channel.failingMethod().catch(function(err) {
			console.error(err);
			//without this empty callback bluebird laments about unhandled error
		});    // this will display error prpagated from serverside
		channel.rpcProps._socket.on('disconnect', function() {
			console.log("channel disconnected!");
		});
		//channel.nonExistentRemoteFn();  // uncomment for typerror to be thrown and handled by otherwise promise method
	}, function(err) {
		throw err;
	});