var rpcClient = require('socket.io-rpc-client');

var rpc = rpcClient('http://localhost:8032');

rpc.tree.fnOnClient = function() {
  console.log('called client method');
  return 42;
};
