require('error-tojson');
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

	this.io.on('connect', function(socket) {
		lldebug("connected socket.id ", socket.id);
		var invocationRes = function(data) {
			lldebug('invocation of ', data.fnPath);
			try {
				var method = traverse(fnTree).get(data.fnPath.split('.'));
			} catch (err) {
				debug('error when resolving an invocation', err);
			}
			if (!Number.isInteger(data.id)) {
				socket.emit('rpcError', {
					reason: new TypeError('id is a required property for a call data payload')
						.toJSON()
				});
			}
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
					retVal.then(function(asyncRetVal) {
						socket.emit('resolve', {Id: data.Id, value: asyncRetVal});
					}, function(error) {
						if (error instanceof Error) {
							error = error.toJSON();
						}
						socket.emit('reject', {Id: data.Id, reason: error});

					});
				} else {
					//synchronous
					if (retVal instanceof Error) {
						socket.emit('reject', {Id: data.Id, reason: retVal.toString()});
					} else {
						socket.emit('resolve', {Id: data.Id, value: retVal});
					}
				}

			} else {
				socket.emit('reject', {
					Id: data.Id,
					reason: new Error('function is not exposed: ' + data.fnPath).toJSON()
				});
			}
		};

		socket.on('call', invocationRes);

		socket.on('fetchNode', function(path) {

			var methods = fnTree;
			if (path) {
				methods = traverse(fnTree).get(path.split('.'));
			}

			if (!methods) {
				socket.emit('noSuchNode', path);
				debug('client requested node ' + path + ' which was not found');
				return;
			}
			var localFnTree = traverse(methods).map(function(el) {
				if (this.isLeaf) {
					return null;
				} else {
					return el;
				}
			});

			socket.emit('node', {path: path, tree: localFnTree});
			debug('client requested node ' + path + 'which was sent as: ', localFnTree);

		});

		socket.on('noSuchNode', function(path) {
			var dfd = socket.remoteNodes[path];
			var err = new Error('Node is not defined on the client');
			err.path = path;
			dfd.reject(err);
		});

		var timeoutId;

		socket.on('disconnect', function() {
			timeoutId = setTimeout(function() {
				debug("cleaning client channels of " + socket.id);
				var throwErr = function() {
					throw new Error('Client channel disconnected, this channel is not available anymore')
				};
				traverse(fnTree).map(function(node) {
					if (this.isLeaf) {
						this.update(throwErr);
					}
				});

			}, 300000); // after five minutes, get rid of client channels
		});

		socket.on('resolve', function(data) {
			deferreds[data.Id].resolve(data.value);
			remoteCallEnded(data.Id);
		});
		socket.on('reject', function(data) {
			deferreds[data.Id].reject(data.reason);
			remoteCallEnded(data.Id);
		});

		socket.on('reconnect', function() {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			var thisClientChnls = clientChannels[socket.id];
			if (!thisClientChnls) {
				socket.emit('reexposeChannels');
			}
		});

		socket.remoteNodes = {}
		socket.rpc = function prepareRemoteCall(fnPath) {
			return function remoteCall() {
				var dfd = Promise.defer();

				if (!socket.connected) {
					dfd.reject(new Error('client ' + socket.id + ' disconnected, call rejected'));
					return dfd.promise;
				}
				invocationCounter++;
				lldebug('calling ', fnPath, 'on ', socket.id, ', invocation counter ', invocationCounter)
				socket.emit('call',
					{Id: invocationCounter, fnPath: fnPath, args: Array.prototype.slice.call(arguments, 0)}
				);
				deferreds[invocationCounter] = dfd;

				return dfd.promise;
			};
		};
		socket.rpc.fetchNode = function(path) {
			socket.on('disconnect', function onDisconnect() {
				socket.connected = false;
				deferreds.forEach(function(dfd, id) {
					dfd.reject(new Error('client ' + socket.id + ' disconnected before returning, call rejected'));
					remoteCallEnded(id);
				});
			});

			var remoteNodes = socket.remoteNodes;
			if (remoteNodes.hasOwnProperty(path)) {
				return remoteNodes[path].promise;
			} else {
				var def = Promise.defer();
				remoteNodes[path] = def;
				socket.emit('fetchNode', path);
				return def.promise;
			}

		};
	});



	var deferreds = [];

	var clientChannels = {};

	var invocationCounter = 0;
	var endCounter = 0;
	var remoteCallEnded = function(Id) {
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

	expApp.get('/rpc/*', function(req, res) {
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
