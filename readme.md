# socket.io-rpc  [![NPM version](https://badge.fury.io/js/socket.io-rpc.png)](http://badge.fury.io/js/socket.io-rpc)

It is a minimalistic remote procedure call(RPC/RMI) library bootstrapped on socket.io and bluebird.js.
Main purpose is to make it more easier to structure your code for browser-server realtime interaction. Typical example is when you need to call a function on the server from client and get the return value from that function back to the client. With raw socket.io, you need to register few events and emit them at the right moment. This can get complicated quite easily, especially for async operations. 

With socket.io-rpc, you just expose a channel of functions and then call those as if they were regular async functions defined on your side, socket.io-rpc automatically resolves a promise on other side, when function returns or returned promise is resolved. It even propagates errors(thrown and returned), so you get error handling almost for free.

Has two client libraries-one for general use, other for AngularJS.
Angular.js lib contains special rpc-controller directive, which when compiled asynchronously loads server channel and instantiates classic angular controller when this channel is ready.

#Simple example
Folder with example can be run by running:

    npm install
    jspm install
    node server

## Usage example

###Serverside
    var io = require('socket.io').listen(server);
    // you should be able to use any other http://promises-aplus.github.io/promises-spec/ compliant library, but I would greatly recommend using bluebird
    var Promise = require('bluebird');
    var rpc = require('socket.io-rpc');
    var rpcMaster = rpc(io, {channelTemplates: true, expressApp: app})
    	.expose('myChannel', {
        //plain JS function
        getTime: function () {
            console.log('Client ID is: ' + this.id);
            return new Date();
        },
        //returns a promise, which when resolved will resolve promise on client-side with the result(with the middle step in JSON over socket.io)
        myAsyncTest: function (param) {
            var deffered = Promise.defer();
            setTimeout(function(){
                deffered.resolve("String generated asynchronously serverside with " + param);
            },1000);
            return deffered.promise;
        }
    });


    io.sockets.on('connection', function (socket) {
        rpcMaster.loadClientChannel(socket,'clientChannel').then(function (fns) {
            fns.fnOnClient("calling client ").then(function (ret) {
                console.log("client returned: " + ret);
            });
        });

    });


###In browser
    //since it is desirable to be able to run the same code in node.js as in the browser, we use systemjs to load commonJS module into the browser
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script> //needs to have bluebird and socket.io-client, look into simple_example folder
    <script type="text/javascript">
        System.import('rpc/rpc-client').then(function(RPC) { //or you can include this package in CJS module of your own
            console.log("rpc client loaded");

            var backend = RPC('http://localhost:8081');
            backend.loadChannel('myChannel')
                    .then(function (channel) {
                          channel.getTime().then(function (date) {
                              console.log('time on server is: ' + date);

                          });
                          channel.myAsyncTest('passing string as argument').then(function(retVal){
                              console.log('server returned: ' + retVal);
                          });
                    }, function (err) {
                        console.log(err + ' equals TypeError: Object #<Object> has no method nonExistentRemoteFn');
                    });

            backend.expose('clientChannel', {
                fnOnClient: function (param) {
                    return 'whatever you need from client returned ' + param;
                }
            }).then(function (channel) {
                        console.log(" client channel ready");
                    }, function (err) {
                        debugger;
                    }
            );

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

###In browser for AngularJS

    <body>
        <h1>Angular socket.io-rpc test/showcase</h1>
        <!--You can also use regular ng-controller, but then you have to load channel yourself by calling
        $rpc.loadChannel('myChannel'); inside it-->
        <div rpc-controller="testCtrl" rpc-channel="myChannel">
            getTime: <span ng-bind="serverTime"></span><br>
            asyncTest: {{ asyncTest }}
        </div>

    </body>
    <script src="/socket.io/socket.io.js"></script>
    <script src="http://code.angularjs.org/1.3.0/angular.js"></script>
    <script src="/rpc/rpc-client-angular.js"></script>
    <script>
        angular.module('app', ['RPC'])
            .controller('testCtrl',
            function ($scope, myChannel) {
                myChannel.getTime().then(function (date) {
                    console.log('time on server is: ' + date);
                    $scope.serverTime = date;
                    //no need to call $scope.$apply, because it is called in $rpc;
                });
                myChannel.myAsyncTest('passing string as argument').then(function (retVal) {
                    console.log('server returned: ' + retVal);
                    $scope.asyncTest = retVal;
                });
                console.log('ctr ' + new Date().toJSON());
            }
        ).run(
        	function ($rpc, $rootScope) {
                var localRPC = $rpc('http://localhost:8080');   // don't forget port, if you are not on 80
                console.log('run ' + new Date().toJSON());

                localRPC.expose('clientChannel', {
					fnOnClient: function (param) {
						return 'whatever you need from client returned ' + param;
					}
				}).then(
					function (channel) {
						console.log(" client channel ready");
					}
				);
            }
		);

        var injector = angular.bootstrap(document, ['app']);

    </script>


###With authentication (server)

    localRPC.expose('myChannel', {
        ...
    },
        function (handshake, callback) {
            console.dir(handshake);
            if (handshake.pswd === 'super secret password') {   //or any other kind of logic you need
                callback(true);
            } else {
                callback(false);
            }
        }
    );


###With authentication (browser)

    localRPC.loadChannel('myChannel', { pswd: "super secret password" }).then(
        function (channel) {
           ...
        }
    );


## Browser support
    numbers are for both clients(vanilla and Angular):
    IE	FIREFOX	SAFARI	CHROME	OPERA	IPHONE	ANDROID
    8.0+	3.5+	4.0+	4.0+	10.5+	2.0+	2.0+
    note: ES5-shim is required in order for socket.io-rpc to work under non ES5 environments such as IE8

## Internal callbacks on client
There are 4 internal callbacks, which might help you in case you need to be notified of a request beginning and ending:

    onBatchStarts   //called when invocation counter equals 1
    onBatchEnd      //called when invocation counter equals endCounter
    onCall          //called when one call is made to server
    onEnd           //called when one call is returned

#TODO
1. add Winston logging.
2. create client for node
