var logger = require('debug');
var debug = logger('socket.io-rpc:');
var traverse = require('traverse');
var noop = function(){};

/**
 * @param {Object} socket
 * @param {Object} tree
 * @param {String} socketId
 */
module.exports = function(socket, tree, socketId) {
	/**
	 * for external use, simple function is used rather than an event emitter, because we lack event emitter in the browser
	 * @type {{batchStarts: Function, batchEnds: Function, call: Function, response: Function}}
	 */
	var eventHandlers = {
		batchStarts: noop,
		batchEnds: noop,
		call: noop,
		response: noop
	};
	var deferreds = [];

	var invocationCounter = 0;
	var endCounter = 0;
	var remoteCallEnded = function(Id) {
		if (deferreds[Id]) {
			delete deferreds[Id];
			endCounter++;
			eventHandlers.response(endCounter);

			if (endCounter == invocationCounter) {
				eventHandlers.batchEnds(endCounter);
				invocationCounter = 0;
				endCounter = 0;
			}
		} else {
			//the client can maliciously try and resolve/reject something more than once. We should not throw an error on this, just warn
			console.error("Deferred Id " + Id + " was resolved/rejected more than once, this should not occur.");
		}
	};

	/**
	 * @param {String} fnPath
	 * @returns {Function} which will call the backend/client when executed
	 */
	function prepareRemoteCall(fnPath) {
		return function remoteCall() {
			var dfd = Promise.defer();

			if (!socket.connected) {
				dfd.reject(new Error('client ' + socketId + ' disconnected, call rejected'));
				return dfd.promise;
			}
			invocationCounter++;
			debug('calling ', fnPath, 'on ', socketId, ', invocation counter ', invocationCounter)
			socket.emit('call',
				{Id: invocationCounter, fnPath: fnPath, args: Array.prototype.slice.call(arguments, 0)}
			);
			if (invocationCounter == 1) {
				eventHandlers.batchStarts(invocationCounter);
			}
			deferreds[invocationCounter] = dfd;

			return dfd.promise;
		};
	}

	socket.rpc = prepareRemoteCall;
	socket.rpc.events = eventHandlers;

	socket.on('call', function(data) {
		debug('invocation with ', data);
		if (!(data && typeof data.Id === 'number')) {
			return socket.emit('rpcError', {
				reason: 'Id is a required property for a call data payload'
			});
		}
		var emitRes = function(type, resData) {
			resData.Id = data.Id;
			socket.emit(type, resData)
		};
		try {
			var method = traverse(tree).get(data.fnPath.split('.'));
		} catch (err) {
			debug('error when resolving an invocation', err);
			return emitRes('reject', {reason: err.toJSON()});
		}
		if (method && method.apply) {	//we could also check if it is a function, but this might be bit faster
			var retVal;
			try {
				retVal = method.apply(socket, data.args);
			} catch (err) {
				//we explicitly print the error into the console, because uncatched errors should not occur
				console.error('RPC method ' + data.fnPath + '  thrown an error : ', e);
				emitRes('reject', {reason: err.toJSON()});
				return;
			}

			if (retVal instanceof Promise) {    // this is async function, so 'return' is emitted after it finishes
				retVal.then(function(asyncRetVal) {
					emitRes('resolve', {value: asyncRetVal});
				}, function(error) {
					if (error instanceof Error) {
						error = error.toJSON();
					}
					emitRes('reject', {reason: error});
				});
			} else {
				//synchronous
				if (retVal instanceof Error) {
					emitRes('reject', {reason: retVal.toString()});
				} else {
					emitRes('resolve', {value: retVal});
				}
			}

		} else {
			var msg = 'function is not exposed: ' + data.fnPath;
			debug(msg);
			emitRes('reject', {reason: new Error(msg).toJSON()});
		}
	}).on('fetchNode', function(path) {

		var methods = tree;
		if (path) {
			methods = traverse(tree).get(path.split('.'));
		} else {
			methods = tree;
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
		debug('client requested node "' + path + '" which was sent as: ', localFnTree);

	}).on('node', function(data) {
		if (socket.remoteNodes[data.path]) {
			var remoteMethods = traverse(data.tree).map(function(el) {
				if (this.isLeaf) {
					var path = this.path.join('.');
					if (data.path) {
						path = data.path + '.' + path;
					}

					this.update(prepareRemoteCall(path));
				}
			});
			var promise = socket.remoteNodes[data.path];
			socket.remoteNodes[data.path] = remoteMethods;
			promise.resolve(remoteMethods);
		} else {
			throw new Error("server sent a node which was not requested");
		}
	}).on('noSuchNode', function(path) {
		var dfd = socket.remoteNodes[path];
		var err = new Error('Node is not defined on the client');
		err.path = path;
		dfd.reject(err);
	}).on('resolve', function(data) {
		deferreds[data.Id].resolve(data.value);
		remoteCallEnded(data.Id);
	}).on('reject', function(data) {
		deferreds[data.Id].reject(data.reason);
		remoteCallEnded(data.Id);
	}).on('reconnect', function() {
		debug('reconnected rpc');
	});

	socket.remoteNodes = {};

	/**
	 *
	 * @param path
	 * @returns {*}
	 */
	socket.rpc.fetchNode = function(path) {
		socket.on('disconnect', function onDisconnect() {
			socket.connected = false;
			deferreds.forEach(function(dfd, id) {
				dfd.reject(new Error('client ' + socketId + ' disconnected before returning, call rejected'));
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
	/**
	 * @param toExtendWith {Object}
	 */
	socket.rpc.expose = function(toExtendWith) {
		assign(tree, toExtendWith);
	};
};