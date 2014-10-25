var should = require('should');
var rpcClient = require('../socket.io-rpc-client-node');
var backend = rpcClient('http://localhost:8081');

describe("simple remote channel",function(){

	var channel;
	beforeEach(function(done) {

		backend.loadChannel('myChannel')
			.then(function(chnl) {
				channel = chnl;
				done();
				//channel.nonExistentRemoteFn();  // uncomment for typerror to be thrown and handled by otherwise promise method
			}, function(err) {
				throw err;
			});
	});

	it('should have 3 methods',function(){
		var methods = Object.keys(channel);
		methods.should.containEql('getTime');
		methods.should.containEql('myAsyncTest');
		methods.should.containEql('failingMethod');

	});

	it('should reject a promise returned by calling a failingMethod', function(done){

		channel.failingMethod().catch(function(err) {
			err.should.eql('Error: Sample error');
			done();
		});
	});


});