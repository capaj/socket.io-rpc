var should = require('should');
var io = require('socket.io-client');



var options ={
	transports: ['websocket'],
	'force new connection': true
};


describe("Chat Server",function(){

	var socket;
	beforeEach(function(done) {
		// Setup
		socket = io.connect('http://localhost:8081', {
			'reconnection delay' : 0
			, 'reopen delay' : 0
			, 'force new connection' : true
		});
		socket.on('connect', function() {
			console.log('worked...');
			done();
		});
		socket.on('disconnect', function() {
			console.log('disconnected...');
		})
	});
	/* Test 1 - A Single User */
	it('Should broadcast new user once they connect',function(done){
		var client = io.connect(socketURL, options);

	});

	/* Test 2 - Two Users */
	it('Should broadcast new user to all users', function(done){
		var client1 = io.connect(socketURL, options);

		client1.on('connect', function(data){
			client1.emit('connection name', chatUser1);

			/* Since first client is connected, we connect
			 the second client. */
			var client2 = io.connect(socketURL, options);

			client2.on('connect', function(data){
				client2.emit('connection name', chatUser2);
			});

			client2.on('new user', function(usersName){
				usersName.should.equal(chatUser2.name + " has joined.");
				client2.disconnect();
			});

		});

		var numUsers = 0;
		client1.on('new user', function(usersName){
			numUsers += 1;

			if(numUsers === 2){
				usersName.should.equal(chatUser2.name + " has joined.");
				client1.disconnect();
				done();
			}
		});
	});

	/* Test 3 - User sends a message to chat room. */
	it('Should be able to broadcast messages', function(done){
		var client1, client2, client3;
		var message = 'Hello World';
		var messages = 0;

		var checkMessage = function(client){
			client.on('message', function(msg){
				message.should.equal(msg);
				client.disconnect();
				messages++;
				if(messages === 3){
					done();
				};
			});
		};

		client1 = io.connect(socketURL, options);
		checkMessage(client1);

		client1.on('connect', function(data){
			client2 = io.connect(socketURL, options);
			checkMessage(client2);

			client2.on('connect', function(data){
				client3 = io.connect(socketURL, options);
				checkMessage(client3);

				client3.on('connect', function(data){
					client2.send(message);
				});
			});
		});
	});

	/* Test 4 - User sends a private message to another user. */
	it('Should be able to send private messages', function(done){
		var client1, client2, client3;
		var message = {to: chatUser1.name, txt:'Private Hello World'};
		var messages = 0;

		var completeTest = function(){
			messages.should.equal(1);
			client1.disconnect();
			client2.disconnect();
			client3.disconnect();
			done();
		};

		var checkPrivateMessage = function(client){
			client.on('private message', function(msg){
				message.txt.should.equal(msg.txt);
				msg.from.should.equal(chatUser3.name);
				messages++;
				if(client === client1){
					/* The first client has received the message
					 we give some time to ensure that the others
					 will not receive the same message. */
					setTimeout(completeTest, 40);
				};
			});
		};

		client1 = io.connect(socketURL, options);
		checkPrivateMessage(client1);

		client1.on('connect', function(data){
			client1.emit('connection name', chatUser1);
			client2 = io.connect(socketURL, options);
			checkPrivateMessage(client2);

			client2.on('connect', function(data){
				client2.emit('connection name', chatUser2);
				client3 = io.connect(socketURL, options);
				checkPrivateMessage(client3);

				client3.on('connect', function(data){
					client3.emit('connection name', chatUser3);
					client3.emit('private message', message)
				});
			});
		});
	});
});