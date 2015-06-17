# socket.io-rpc [![Build Status](https://travis-ci.org/capaj/socket.io-rpc.svg?tag=1.0.3)](https://travis-ci.org/capaj/socket.io-rpc) 

[![Join the chat at https://gitter.im/capaj/socket.io-rpc](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/capaj/socket.io-rpc?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM badge](https://nodei.co/npm/socket.io-rpc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/socket.io-rpc/)
[![Dependency Status](https://david-dm.org/capaj/socket.io-rpc.svg)](https://david-dm.org/capaj/socket.io-rpc) [![devDependency Status](https://david-dm.org/capaj/socket.io-rpc/dev-status.svg)](https://david-dm.org/capaj/socket.io-rpc#info=devDependencies)


It is a minimalistic remote procedure call(RPC/RMI) library bootstrapped on socket.io.
Main purpose is to make it more easier to structure your async code for browser-server realtime interaction. Typical example is when you need to call a function on the server from client and get the return value from that function back to the client. With raw socket.io, you need to register few events and emit them at the right moment. This can get complicated quite easily, especially for async operations and error handling. Thanks to promises(and try/catch for sync operations), this library knows when a computation failed or suceeded. 

With socket.io-rpc, you just expose a tree of functions and then call those, socket.io-rpc automatically resolves a promise on other side, when function returns or returned promise is resolved. It even propagates errors(thrown and returned), so you get error handling almost for free.

Has an isomorphic(browser or node) client library(which sits in separate [repo](https://github.com/capaj/socket.io-rpc-client)/[npm package](https://www.npmjs.com/package/socket.io-rpc-client)).
Client side library has to be installed via [JSPM](https://github.com/jspm/jspm-cli).

#Simple example
Folder with example can be run after installing all dependencies like this in the simple-example folder:

    npm install //this runs jspm install too
    
Then run it from git repo root:

    node simple-example/server

## Usage example

###Serverside
```javascript
 var rpcClient = require('socket.io-rpc-client');
 
 var server = rpcClient('http://localhost:8032');
 
 server.expose({
 	fnOnClient: function() {
 		console.log('called client method');
 		return 42;
 	},
 	asyncOnClient: function() {
 		return new Promise(function(resolve, reject) {
 			setTimeout(function(){
 				resolve('resolved after 40ms');
 			}, 40);
 		});
 	},
 	erroringMethod: function() {
 		notdefined.error.will.propagate;
 	}
 });


    io.sockets.on('connection', function (socket) {
        rpcMaster.loadClientChannel(socket,'clientChannel').then(function (fns) {
            fns.fnOnClient("calling client ").then(function (ret) {
                console.log("client returned: " + ret);
            });
        });

    });
```

###In browser
```html
    //since it is desirable to be able to run the same code in node.js as in the browser, we use systemjs to load commonJS module into the browser
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script> //needs to have bluebird and socket.io-client, look into simple_example folder
    <script type="text/javascript">
        System.import('socket.io-rpc-client').then(function(backend) { /
            var rpc = rpcClient('http://localhost:8032');
            rpc.fetchNode('')
                    .then(function (root) {
                          root.getTime().then(function (date) {
                              console.log('time on server is: ' + date);

                          });
                          channel.myAsyncTest('passing string as argument').then(function(retVal){
                              console.log('server returned: ' + retVal);
                          });
                    }, function (err) {
                        console.log(err + ' equals TypeError: Object #<Object> has no method nonExistentRemoteFn');
                    });

            rpc.expose({
                fnOnClient: function (param) {
                    return 'whatever you need from client returned ' + param;
                }
            });

            function setText(elem, changeVal) {
                if ((elem.textContent) && (typeof (elem.textContent) != "undefined")) {
                    elem.textContent = changeVal;
                } else {
                    elem.innerText = changeVal;
                }
            }
        }, function(e) {
            setTimeout(function () {
                console.error(e);
            });
        });
    </script>
```

###With authentication (server)

Set authentication normally as you would with [socket.io](http://socket.io/docs/migrating-from-0-9/#authentication-differences).


###With authentication (browser)

Send your auth token with the backend connect method(the one that is exported from the module).

## Browser support
    numbers are for both clients(vanilla and Angular):
    IE	FIREFOX	SAFARI	CHROME	OPERA	IPHONE	ANDROID
    9.0+	3.5+	4.0+	4.0+	10.5+	2.0+	2.0+


## Internal callbacks on client
There are 4 internal callbacks, which might help you in case you need to be notified of a request beginning and ending:

    batchStarts   //called when invocation counter equals 1
    batchEnds      //called when invocation counter equals endCounter
    call          //called when one call is made to server
    response           //called when a call response is fired


