var builder = require('systemjs-builder');
var path = require('path');

builder.build('socket.io-rpc-client-angular', {
	baseURL: path.resolve('./'),
	"paths": {
		"*": "*.js",
		"npm:*": "jspm_packages/npm/*.js",
		"github:*": "jspm_packages/github/*.js"
	},
	// any map config
	map: {
		"socket.io-client": "node_modules/socket.io-client/socket.io",
		"angular": "github:angular/bower-angular@^1.3.1"
	},
	"versions": {
		"github:angular/bower-angular": "1.3.1"
	}

	// etc. any SystemJS config
}, 'dist/client-angular.js')
	.then(function() {
		console.log('Build complete');
	})
	.catch(function(err) {
		console.log('Build error');
		console.log(err);
	});