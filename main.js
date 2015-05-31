require('error-tojson');
require('o.extend');

var express = require('express');
var socketIO = require('socket.io');
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
			if (typeof toExtendWith !== 'object') {
				throw new TypeError('object expected as first argument');
			}
			Object.extend(tree, toExtendWith);
		}
	};
	var tree = {};
	rpcServer.io.on('connect', function(socket) {
		socketEventHandlers(socket, tree, 'server');
	});

	rpcServer.expressApp = expApp;
	return rpcServer;

}

module.exports = RPCserver;
