var Promise = require('bluebird');

module.exports = {
	//plain JS function
	getTime: function() {
		console.log('Client ID is: ' + this.id);
		return new Date();
	},
	//returns a promise, which when resolved will resolve promise on client-side with the result
	myAsyncTest: function(param) {
		var deffered = Promise.defer();
		setTimeout(function() {
			deffered.resolve("String generated asynchronously serverside with " + param);
		}, 1000);
		return deffered.promise;
	},
	failingMethod: function() {
		var deffered = Promise.defer();
		setTimeout(function() {
			deffered.reject(new Error("Sample error"));
		}, 2000);
		return deffered.promise;
	}
};