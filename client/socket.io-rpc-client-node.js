var Storage = require('dom-storage');
var Promise = require('bluebird');
var clientInjectableFn = require('./client');

// in-memory localStorage for caching templates
global.localStorage = new Storage(null, { strict: true });

var noop = function(){};

//we are faking angular's injection process and from the function, our client is returned asme way s when Angular instantiates it
module.exports = clientInjectableFn({$apply: noop}, console, Promise);