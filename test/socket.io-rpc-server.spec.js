require('chai').should();

var RPC = require('../main.js');
var express = require('express');
var cp = require('child_process');
var port = 8032;

var rpcApp = new RPC(port);

var app = rpcApp.expressApp;
var client = cp.fork('./test-utils/client-test-sample.js');

var socket;
describe('server calling connected client', function() {
	this.timeout(8000);

	before(function(done) {

		rpcApp.io.on('connection', function(_socket_) {
			socket = _socket_;
			done();
		});
	});

	it('should have 3 methods on root node', function(){
		return socket.rpc.fetchNode('').then(function(remoteMethods){
			(typeof remoteMethods.erroringMethod).should.equal('function');
			(typeof remoteMethods.asyncOnClient).should.equal('function');
			(typeof remoteMethods.fnOnClient).should.equal('function');
		}, function(err) {
			throw err;
		});

	});

	it('should properly call to client and return synchronous function', function() {

		return socket.rpc('fnOnClient')().then(function(ret) {
			console.log("client returned: " + ret);
			ret.should.equal(42);
		});

	});

	it('should properly call to client and return async function', function() {

		return socket.rpc('asyncOnClient')().then(function(ret) {
			ret.should.equal('resolved after 40ms');
		});

	});

	it('should reject when trying to fetch a node which does not exist', function() {
		return socket.rpc.fetchNode('weDidNotDefineIt').then(function() {
			throw new Error('This should not have resolved');
		}, function(err) {
			err.message.should.equal('Node is not defined on the client');
			err.path.should.equal('weDidNotDefineIt');
		})
	});

	it('should reject when client has an error thrown', function() {
		return socket.rpc('erroringMethod')().then(function(ret) {
			throw new Error('this must not resolve');
		}, function(err) {
			err.message.should.equal('notdefined is not defined');
		});
	});

	it('client methods should no longer be callable after client disconnects', function(done) {
		client.kill();

		socket.rpc('fnOnClient')().then(function() {
			throw new Error('This should not have resolved');
		}, function(err) {
			err.message.should.match(/client (.*) disconnected before returning, call rejected/);
			done();
		});
		setTimeout(function(){
			socket.rpc('fnOnClient')().then(function() {
				throw new Error('This should not have resolved');
			}, function(err) {
				err.message.should.match(/client (.*) disconnected, call rejected/);
				done();
			});
		}, 100);
	});

});
