require('error-tojson')
require('o.extend')

var socketIO = require('socket.io')
var socketEventHandlers = require('./socket.io-rpc-event-handlers/socket-event-handlers')
/**
 * Shares the same signature as express.js listen method, because it passes arguments to it when first argument is number
 * @param {Number|Object} port or http server
 * @param {String} [hostname]
 * @param {Function} [Callback]
 * @returns {{expose: Function, loadClientChannel: Function, channel: Object}} rpc backend instance
 */
function RPCserver () {
  var server
  if(typeof arguments[0] === 'number') {
    server = require('http').createServer()
    server.listen.apply(server, arguments)
  }else {
    server = arguments[0]
  }

  var io = socketIO(server)

  var rpcServer = {
    io: io.of('/rpc'),
    /**
     * @param toExtendWith {Object}
     */
    expose: function (toExtendWith) {
      if (typeof toExtendWith !== 'object') {
        throw new TypeError('object expected as first argument')
      }
      Object.extend(tree, toExtendWith)
    },
    server: server
  }
  var tree = {}
  rpcServer.io.on('connect', function (socket) {
    socketEventHandlers(socket, tree, 'server')
  })

  return rpcServer
}

module.exports = RPCserver
