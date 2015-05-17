var rpcClient = require('socket.io-rpc-client');

var backend = rpcClient('http://localhost:8032');

backend.expose({fnOnClient: function() {
  console.log('called client method');
  return 42;
}});
