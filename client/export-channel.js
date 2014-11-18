var RPC = require('rpc:socket.io-rpc-client');

/**
 * @param {String} name
 * @param {Array<String>} methods
 * @param {String} backendUrl
 */
module.exports = function(name, methods, backendUrl) {
  var auth = localStorage.getItem('SIORPC-handshake:' + backendUrl);
  var backend;
  if (auth) {
    backend = RPC(backendUrl, JSON.parse(auth));
  } else {
    backend = RPC(backendUrl);
  }
  var chnl = backend.loadChannelSync(name, methods);
  chnl.rpcProps.backend = backend;
  return chnl;
};