var Promise = require('bluebird');
var noop = function(){};

var clientInjectableFn = require('rpc/client');

//we are faking angular's injection process and from the function, our client is returned asme way s when Angular instantiates it
module.exports = clientInjectableFn({$apply: noop}, console, Promise);
