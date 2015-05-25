require('error-tojson');
var express = require('express');
var socketIO = require('socket.io');

var assign = require('lodash.assign');
var socketEventHandlers = require('./socket.io-rpc-event-handlers/socket-event-handlers');
/**
 * @param {Number} port
 * @returns {{expose: Function, loadClientChannel: Function, channel: Object}} rpc backend instance
 */
function RPCserver(port) {
	var expApp = express();
	var server = expApp.listen(port);
	var io = socketIO.listen(server);

	var rpcServer = {
		io: io.of('/rpc'),
		/**
		 * @param toExtendWith {Object}
		 */
		expose: function(toExtendWith) {
			assign(tree, toExtendWith);
		}
	};
	var tree = {};
	rpcServer.io.on('connect', function(socket) {
		assign(rpcServer, socketEventHandlers(socket, tree, 'server'));
	});

	rpcServer.expressApp = expApp;
	return rpcServer;

}

module.exports = RPCserver;
