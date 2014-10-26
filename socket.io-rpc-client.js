var Promise = require('bluebird');
var noop = function(){};

var injectableFn = require('./client');

//we are faking angular's injection process and from the function, our client is returned asme way s when Angular instantiates it
module.exports = injectableFn({$apply: noop}, console, Promise);
