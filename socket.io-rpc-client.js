var Promise = require('bluebird');
var noop = function(){};

var injectableFn = require('./client');

//this was we fake angular's injection process and get our client which works outside angular
module.exports = injectableFn({$apply: noop}, console, Promise);
