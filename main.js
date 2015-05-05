var express = require('express');
var socketIO = require('socket.io');
var traverse = require('traverse');

var Promise = require('bluebird');
var logger = require('debug');
var debug = logger('socket.io-rpc');
var lldebug = logger('socket.io-rpc:low-level');
var _ = require('lodash');
var path = require('path');

/**
 * @param {Number} port
 * @param {Object} fnTree
 * @returns {{expose: Function, loadClientChannel: Function, channel: Object}} rpc backend instance
 */
function RPCserver(port, fnTree) {
	var expApp = express();
	var server = expApp.listen(port);

    var io = socketIO.listen(server);

	this.io = io.of('/rpc');

	this.io.on('connection', function(socket) {
		var invocationRes = function(data) {
			var method = traverse(tree).get(data.fnPath.split('.'));
			if (method && method.apply) {	//we could also check if it is a function, but this might be bit faster
				var retVal;
				try {
					retVal = method.apply(socket, data.args);
				} catch (e) {
					//we explicitly print the error into the console, because uncatched errors should not occur
					console.error('RPC method ' + data.fnPath + '  thrown an error : ', e);
					retVal = e;
				}
				/* NOTE: Will return true for *any thenable object*, and isn't truly safe, since it will access the `then` property*/
				if (retVal && typeof retVal.then === 'function') {    // this is async function, so 'return' is emitted after it finishes
					retVal.then(function (asyncRetVal) {
						socket.emit('resolve', { Id: data.Id, value: asyncRetVal });
					}, function (error) {
						if (error instanceof Error) {
							error = error.toString();
						}
						socket.emit('reject', { Id: data.Id, reason: error });

					});
				} else {
					//synchronous
					if (retVal instanceof Error) {
						socket.emit('reject', { Id: data.Id, reason: retVal.toString() });
					} else {
						socket.emit('resolve', { Id: data.Id, value: retVal });
					}
				}

			} else {
				socket.emit('reject', {Id: data.Id, reason: 'no such function has been exposed: ' + data.fnPath });
			}
		};

		socket.on('call', invocationRes);

		socket.on('node', function (path) {
			var methods = fnTree;
			if (path) {
				methods = traverse(fnTree).get(path);
			}
			if (!methods) {
				socket.emit('noSuchNode', path);
			}
			var localFnTree = traverse(methods).map(function(el) {
				if (this.isLeaf) {
					return null;
				} else {
					return el;
				}
			});

			socket.emit('node', {path: path, tree:localFnTree});
		});
		clientKnownChannels[socket.id] = [];

		var timeoutId;

		socket.on('disconnect', function() {
			timeoutId = setTimeout(function () {
				debug("cleaning client channels of " + socket.id);
				var throwErr = function () {
					throw new Error('Client channel disconnected, this channel is not available anymore')
				};
				traverse(fnTree).map(function (node){
					if (this.isLeaf) {
						this.update(throwErr);
					}
				});
				delete clientChannels[socket.id];   //cleaning up in disconnect
				delete clientKnownChannels[socket.id]; //cleaning up in disconnect
			}, 300000); // after five minutes, get rid of client channels
		});

		socket.on('reconnect', function () {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			var thisClientChnls = clientChannels[socket.id];
			if (!thisClientChnls) {
				//TODO ask client to reexpose channels
				socket.emit('reexposeChannels');
			} else {
				var index = thisClientChnls.length;
				while(index--) {
					socket.emit('clientChannelCreated', thisClientChnls[index].name);
				}
			}
		});

		socket.rpc = {
			call: function(path) {
				//TOOO
			},
			fetchNode: function() {
				//TODO

				socket.on('disconnect', function onDisconnect() {
					var err = function () {
						throw new Error('Client channel disconnected, this channel is not available anymore')
					};
					for (var method in channel.fns) {
						channel.fns[method] = err;	// references to client channel might be hold in client code, so we need to invalidate them
					}
					debug("disconnected clc " + name);
				});
			}
		};
	});

	var clientKnownChannels = {};


	var deferreds = [];
	var serverChannels = {};
	var clientChannels = {};


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
			//the client can maliciously try and resolve/reject something more than once. We should not throw an error on this, just warn
			console.error("Deferred Id " + Id + " was resolved/rejected more than once, this should not occur.");
		}
	};

	expApp.get('/rpc/*', function (req, res){
		var nodePath = '';
		var fnNames = traverse(fnTree).get(nodePath);

		res.type('application/javascript; charset=utf-8');
		var fullUrl = "'" + req.protocol + '://' + req.get('host') + "'";

		var clSideScript = 'var fns = ' + JSON.stringify(fnNames) + '\n' + '' +
			'var chnl = require("socket.io-rpc-client/export-channel")("' + name + '", fns, ' + fullUrl + ') \n' +
			'module.exports = chnl;';
		res.send(clSideScript);
		res.end();

	});

	this.tree = fnTree;
	this.expressApp = expApp;

}

module.exports = RPCserver;
