require('chai').should();
var rpcClient = require('socket.io-rpc-client');
var cp = require('child_process');

var server = cp.fork('./simple-example/server.js');

var backend = rpcClient('http://localhost:8031');

describe("simple tree of remote methods",function(){

	var channel;
	var otherChannel;
	before(function(done) {

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

	before(function(done) {
		backend.loadChannel('./channelDeep/deep2/channelDeep')
			.then(function(chnl) {
				otherChannel = chnl;
				done();
				//channel.nonExistentRemoteFn();  // uncomment for typerror to be thrown and handled by otherwise promise method
			}, function(err) {
				throw err;
			});
	});

	it('should yield a number when called', function(done){
	    otherChannel.purpose().then(function(num) {
			num.should.equal(42);
			done();
		});
	});

	after(function() {
		server.kill();
	})

});