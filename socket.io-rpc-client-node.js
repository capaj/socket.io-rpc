var Storage = require('dom-storage');

// in-memory localStorage for caching templates
global.localStorage = new Storage(null, { strict: true });

module.exports = require('./socket.io-rpc-client');