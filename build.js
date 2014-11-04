var builder = require('systemjs-builder');
var path = require('path');
var config = require('./dist/build-config');

builder.build('socket.io-rpc-client-angular', config, 'dist/rpc-client-angular-bundle.js')
	.then(function() {
		console.log('Build complete');
	})
	.catch(function(err) {
		console.log('Build error');
		console.log(err);
	});