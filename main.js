require('error-tojson');
var express = require('express');
var socketIO = require('socket.io');
var traverse = require('traverse');

var Promise = require('bluebird');
var logger = require('debug');
var debug = logger('socket.io-rpc:main');
var assign = require('lodash.assign');
var path = require('path');
var socketEventHandlers = require('./lib/socket-event-handlers');
/**
 * @param {Number} port
 * @returns {{expose: Function, loadClientChannel: Function, channel: Object}} rpc backend instance
 */
function RPCserver(port) {
	var expApp = express();
	var server = expApp.listen(port);
	var io = socketIO.listen(server);

	var rpcServer = {io: io.of('/rpc')};
	var tree = {};
	rpcServer.io.on('connect', function(socket) {
		debug("connected socket.id ", socket.id);
		assign(rpcServer, socketEventHandlers(socket, tree, socket.id));
	});

	expApp.get('/rpc/*', function(req, res) {
		var nodePath = '';
		var fnNames = traverse(tree).get(nodePath);

		res.type('application/javascript; charset=utf-8');
		var fullUrl = "'" + req.protocol + '://' + req.get('host') + "'";

		var clSideScript = 'var fns = ' + JSON.stringify(fnNames) + '\n' + '' +
			'var chnl = require("socket.io-rpc-client/export-channel")("' + name + '", fns, ' + fullUrl + ') \n' +
			'module.exports = chnl;';
		res.send(clSideScript);
		res.end();

	});

	rpcServer.expressApp = expApp;
	return rpcServer;

}

module.exports = RPCserver;
