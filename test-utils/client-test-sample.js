/* global notdefined */
var rpcClient = require('socket.io-rpc-client')

var rpc = rpcClient('http://localhost:8032')

rpc.expose({
  fnOnClient: function () {
    console.log('called client method')
    return 42
  },
  asyncOnClient: function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('resolved after 40ms')
      }, 40)
    })
  },
  erroringMethod: function () {
    notdefined.error.will.propagate
  },
  callTextTestOnServer: function () {
    return rpc('textTest')()
  }
})
