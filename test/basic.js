require('chai').should();
var rpcClient = require('../client/socket.io-rpc-client-node.js');
var cp = require('child_process');

var n = cp.fork('./simple-example/server.js');

var backend = rpcClient('http://localhost:8031');

describe("simple remote channel",function(){

	var channel;
	beforeEach(function(done) {

		backend.loadChannel('./rpc_channel_test')
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
		methods.should.include('getTime');
		methods.should.include('myAsyncTest');
		methods.should.include('failingMethod');

	});

	it('should reject a promise returned by calling a failingMethod', function(done){
		this.timeout(5000);
		channel.failingMethod().catch(function(err) {
			err.should.eql('Error: Sample error');
			done();
		});
	});


});