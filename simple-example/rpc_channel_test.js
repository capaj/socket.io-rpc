module.exports = {
	//plain JS function
	getTime: function() {
		console.log('Client ID is: ' + this.id);
		return new Date();
	},
	//returns a promise, which when resolved will resolve promise on client-side with the result
	myAsyncTest: function(param) {
		return new Promise(function(resolve, reject) {
			setTimeout(function(){
				resolve("String generated asynchronously serverside with " + param);
			}, 40);
		});
	},
	failingMethod: function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function(){
				reject(new Error("Sample error"));
			}, 40);
		});
	}
};