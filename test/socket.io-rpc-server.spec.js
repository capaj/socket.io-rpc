var RPC = require('../main.js');
var express = require('express');
var cp = require('child_process');
var port = 8032;

var rpcApp = new RPC(port, {});

var app = rpcApp.expressApp;
var client = cp.fork('./client-test-sample.js');
var socket;
describe('server calling connected client', function(done) {
  before(function(done) {
    rpcApp.io.on('connection', function (_socket_) {
      socket = _socket_;
      done();
    });
  });

  it.only('should properly call to client and return', function(){

    console.log("cl call " + socket.rpc.call);
    return socket.rpc.call('fnOnClient')().then(function(ret){
      console.log("client returned: " + ret);
      ret.should.equal(42);
    });

  });

  it('should reject when trying to fetch a node which does not exist', function() {
    return socket.fetchNode('weDidNotDefineIt').then(function() {
      throw new Error('This should not have resolved');
    }, function(err) {
      err.message.should.equal('Node is not defined on the client');
      err.path.should.equal('weDidNotDefineIt');
    })
  });

  after(function() {
    client.kill();
  });
});
