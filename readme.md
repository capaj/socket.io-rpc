# socket.io-rpc [![Build Status](https://travis-ci.org/capaj/socket.io-rpc.svg?tag=1.0.3)](https://travis-ci.org/capaj/socket.io-rpc) [![Join the chat at https://gitter.im/capaj/socket.io-rpc](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/capaj/socket.io-rpc?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM badge](https://nodei.co/npm/socket.io-rpc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/socket.io-rpc/)
[![Dependency Status](https://david-dm.org/capaj/socket.io-rpc.svg)](https://david-dm.org/capaj/socket.io-rpc) [![devDependency Status](https://david-dm.org/capaj/socket.io-rpc/dev-status.svg)](https://david-dm.org/capaj/socket.io-rpc#info=devDependencies)

Has an isomorphic(browser or node) client library(which sits in separate [repo](https://github.com/capaj/socket.io-rpc-client)/[npm package](https://www.npmjs.com/package/socket.io-rpc-client)).
Client side library has to be installed via [JSPM](https://github.com/jspm/jspm-cli).

It is a minimalistic remote procedure call(RPC/RMI) library bootstrapped on socket.io.
Main purpose is to make it more easier to structure your async code for browser-server realtime interaction. Typical example is when you need to call a function on the server from client and get the return value from that function back to the client. With raw socket.io, you need to register few events and emit them at the right moment. This can get complicated quite easily, especially for async operations and error handling. Thanks to promises(and try/catch for sync operations), this library knows when a computation failed or suceeded. 

With socket.io-rpc, you just expose a tree of functions and then call those, socket.io-rpc automatically resolves a promise on other side, when function returns or returned promise is resolved. It propagates thrown errors, so it is much easier to do errorhandling than with http error codes. 

### Why promises over network rather than HTTP codes? 

Because they are more real abstraction on long running tasks over the network. Trying to map all possible error and their causes to available HTTP codes is impossible for any but simplest of web applications.

#Simple example
Folder with example can be run after installing all dependencies like this in the simple-example folder:

    npm install //this runs jspm install too
    
Then run it from git repo root:

    node simple-example/server

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


