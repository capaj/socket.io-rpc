require('chai').should();
var rpcClient = require('socket.io-rpc-client');
var cp = require('child_process');
var Promise = require('bluebird');
var server = cp.fork('./simple-example/server.js');

var backend = rpcClient('http://localhost:8031');

describe("simple tree of remote methods",function(){

	var remoteMethods;
	before(function(done) {

		backend.fetchNode('rpc/test')
			.then(function(chnl) {
				remoteMethods = chnl;
				done();
			}, function(err) {
				throw err;
			});
	});

	it('should have 3 methods on that node',function(){
		var methods = Object.keys(remoteMethods);
		methods.should.include('getTime');
		methods.should.include('myAsyncTest');
		methods.should.include('failingMethod');
	});

	it('should reject when trying to fetch a node which does not exist', function() {
		return backend.fetchNode('weDidNotDefineIt').then(function() {
			throw new Error('This should not have resolved');
		}, function(err) {
			err.message.should.equal('This node is not defined on the backend');
		})
	});

	it('should reject a promise returned by calling a failingMethod', function(done){
		this.timeout(5000);
		remoteMethods.failingMethod().catch(function(err) {
			err.should.eql('Error: Sample error');
			done();
		});
	});

	it('should properly call and return when called as a string path', function(){
	    return Promise.all([
			backend.call('plain').then(function(num) {
				num.should.equal(41);
			}),
			backend.call('test.myAsyncTest', 'myParam').then(function (ret){
				ret.should.equal('String generated asynchronously serverside with myParam');
			})
		]);

	});

	it('should reject when remote function doesn\'t exist', function() {
		return backend.call('weDidNotDefineIt').then(function() {
			throw new Error('This should not have resolved');
		}, function(err) {
			err.message.should.equal('Called an undefined function');
		});
	});


	after(function() {
		server.kill();
	})

});