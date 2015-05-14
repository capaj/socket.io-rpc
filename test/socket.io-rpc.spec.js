require('chai').should();
var rpcClient = require('socket.io-rpc-client');
var cp = require('child_process');
var Promise = require('bluebird');
var server = cp.fork('./simple-example/server.js');

var rpc = rpcClient('http://localhost:8031');

describe("simple tree of remote methods",function(){

	this.timeout(10000);
	var remoteMethods;
	before(function(done) {

		rpc.fetchNode('test')
			.then(function(chnl) {
				remoteMethods = chnl;
				done();
			}, function(err) {
				throw err;
			});
	});

	it('should have 3 methods on that node', function(){
		(typeof remoteMethods.failingMethod).should.equal('function');
		(typeof remoteMethods.myAsyncTest).should.equal('function');
		(typeof remoteMethods.getTime).should.equal('function');
	});

	it('should reject when trying to fetch a node which does not exist', function() {
		return rpc.fetchNode('weDidNotDefineIt').then(function() {
			throw new Error('This should not have resolved');
		}, function(err) {
			err.message.should.equal('Node is not defined on the backend');
			err.path.should.equal('weDidNotDefineIt');
		})
	});

	it('should reject a promise returned by calling a failingMethod', function(done){
		remoteMethods.failingMethod().catch(function(err) {
			err.message.should.eql('Sample error');
			done();
		});
	});

	it('should properly call and return when called as a string path', function(){
	    return Promise.all([
			rpc('plain')().then(function(num) {
				num.should.equal(41);
			}),
			rpc('test.myAsyncTest')('myParam').then(function (ret){
				ret.should.equal('String generated asynchronously serverside with myParam');
			})
		]);

	});

	it('should reject when remote function doesn\'t exist', function() {
		return rpc('weDidNotDefineIt')().then(function() {
			throw new Error('This should not have resolved');
		}, function(err) {
			err.message.should.equal('function is not exposed: weDidNotDefineIt');
		});
	});


	after(function() {
		server.kill();
	})

});