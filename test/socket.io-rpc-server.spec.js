/* eslint-env node, mocha */
require('chai').should()

var RPC = require('../main.js')

var cp = require('child_process')
var port = 8032

var rpcApp

var client = cp.fork('./test-utils/client-test-sample.js')

describe('server calling connected client', function () {
  this.timeout(8000)
  var socket
  it('should allow to bootstrap it on top of existing http server', function (done) {
    var server = require('http').createServer()
    var inst = RPC(server)
    server.listen(port)
    inst.io.on('connection', function (_socket_) {
      socket = _socket_
      inst.server.close(function () {
        done()
      })
    })
  })

  it('should have the same signature as express.js listen-you can pass a callback to be triggered when server starts listening', function (done) {
    rpcApp = RPC(port, done)
  })

  it('should trigger a connection event when client connects', function (done) {
    rpcApp.io.on('connection', function (_socket_) {
      socket = _socket_
      done()
    })
  })

  it('should be able to expose functions,  ', function () {
    rpcApp.expose({
      textTest: function () {
        return 'from server'
      }
    })
  })

  it('should get a copy of methods on root node on the client', function () {
    return socket.rpc.fetchNode('').then(function (remoteMethods) {
      (typeof remoteMethods.erroringMethod).should.equal('function');
      (typeof remoteMethods.callTextTestOnServer).should.equal('function');
      (typeof remoteMethods.asyncOnClient).should.equal('function');
      (typeof remoteMethods.fnOnClient).should.equal('function')
    }, function (err) {
      throw err
    })
  })

  it('should allow clients to call exposed functions', function () {
    return socket.rpc('callTextTestOnServer')().then(function (ret) {
      ret.should.equal('from server')
    })
  })

  it('should allow clients to call exposed generator functions', function () {
    return socket.rpc('callGenerator')('with arg a').then(function (ret) {
      ret.should.equal('from server generator with arg a')
    }, function (e) {
      console.error(e)
    })
  })

  it('should properly call to client and return a synchronous function', function () {
    return socket.rpc('fnOnClient')().then(function (ret) {
      console.log('client returned: ' + ret)
      ret.should.equal(42)
    })
  })

  it('should properly call to client and return async function', function () {
    return socket.rpc('asyncOnClient')().then(function (ret) {
      ret.should.equal('resolved after 40ms')
    })
  })

  it('should throw type error when trying to expose anything else than an object', function () {
    try {
      rpcApp.expose('string')
    } catch (err) {
      err.message.should.equal('object expected as first argument')
    }
  })

  it('should reject when trying to fetch a node which does not exist', function () {
    return socket.rpc.fetchNode('weDidNotDefineIt').then(function () {
      throw new Error('This should not have resolved')
    }, function (err) {
      err.message.should.match(/Node is not defined on the socket (.*)/)
      err.path.should.equal('weDidNotDefineIt')
    })
  })

  it('should reject when client has an error thrown', function () {
    return socket.rpc('erroringMethod')().then(function (ret) {
      throw new Error('this must not resolve')
    }, function (err) {
      err.message.should.equal('notdefined is not defined')
    })
  })

  it('client methods should no longer be callable after client disconnects', function (done) {
    client.kill()

    socket.rpc('fnOnClient')().then(function () {
      throw new Error('This should not have resolved')
    }, function (err) {
      err.message.should.match(/socket (.*) disconnected before returning, call rejected/)
      done()
    })
    setTimeout(function () {
      socket.rpc('fnOnClient')().then(function () {
        throw new Error('This should not have resolved')
      }, function (err) {
        err.message.should.match(/socket (.*) disconnected, call rejected/)
        done()
      })
    }, 100)
  })
})
