# socket.io-rpc  [![NPM version](https://badge.fury.io/js/socket.io-rpc.png)](http://badge.fury.io/js/socket.io-rpc)

Main purpose is to make it more easier to structure your code for browser-server realtime interaction.
It is a minimalistic remote procedure call(RPC/RMI) library bootstrapped on socket.io and when.js. Has two client libraries-one for general use, other for AngularJS.
Angular.js lib contains special rpc-controller, which when compiled asynchronously loads server channel and instantiatel classic angular controller.
Whole library is depending on promises. When calling over network, promise is always returned.


## ChangeLog
    0.0.8 -> 0.0.9 Switched from Q to when.js for better performance
    0.1.3 -> 0.1.4 Added a directive to angularJS client to make instantiating a controller with rpc channel less of a chore
    
## Browser support
    numbers are for standalone(but angular.js should be similar) client(author's guess):
    IE	FIREFOX	SAFARI	CHROME	OPERA	IPHONE	ANDROID
    8.0+	3.5+	4.0+	4.0+	10.5+	2.0+	2.0+

## Usage example


###Serverside
    var io = require('socket.io').listen(server);
    var when = require('when'); // you can use any other http://promises-aplus.github.io/promises-spec/ compliant library
    var rpc = require('socket.io-rpc');
    rpc.createServer(io, app);
    rpc.expose('myChannel', {
        //plain JS function
        getTime: function () {
            console.log('Client ID is: ' + this.id);
            return new Date();
        },
        //returns a promise, which when resolved will resolve promise on client-side with the result
        myAsyncTest: function (param) {
            var deffered = when.defer();
            setTimeout(function(){
                deffered.resolve("String generated asynchronously serverside with " + param);
            },1000);
            return deffered.promise;
        }
    });


    io.sockets.on('connection', function (socket) {
        rpc.loadClientChannel(socket,'clientChannel', function (socket, fns) {
            fns.fnOnClient("calling client ").then(function (ret) {
                console.log("client returned: " + ret);
            });
        });

    });


###In browser

    <script src="/socket.io/socket.io.js"></script>
    <script>
        window.define = function(factory) {
            try{ delete window.define; } catch(e){ window.define = void 0; } // IE
            window.when = factory();
        };
        window.define.amd = {};
    </script>
    <script src="/rpc/when.js"></script>    // for optimal performace download and use here minified version, use this for development or for non-performance critical scenarios
    <script src="/rpc/rpc-client.js"></script>
    <script>
        RPC.connect('http://localhost:8080');
        RPC.loadChannel('myChannel').then(
            function (channel) {
                channel.getTime().then(function (date) {
                    console.log('time on server is: ' + date);

                });
                channel.myAsyncTest('passing string as argument').then(function(retVal){
                    console.log('server returned: ' + retVal);
                });
            }
        );
        RPC.expose('clientChannel', {
            fnOnClient: function (param) {
                return 'whatever you need from client returned ' + param;
            }
        }).then(
            function (channel) {
                console.log(" client channel ready");
            }
        );
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
    <script src="http://code.angularjs.org/1.2.0-rc.2/angular.js"></script>
    <script src="/rpc/rpc-client-angular.js"></script>
    <script>
        angular.module('app', ['RPC'])
            .controller('testCtrl',
            function ($scope, $rpc) {
                $scope.rpc.getTime().then(function (date) {
                    console.log('time on server is: ' + date);
                    $scope.serverTime = date;
                    //no need to call $scope.$apply, because it is called in $rpc;
                });
                $scope.rpc.myAsyncTest('passing string as argument').then(function (retVal) {
                    console.log('server returned: ' + retVal);
                    $scope.asyncTest = retVal;
                });
                console.log('ctr ' + new Date().toJSON());

                $rpc.expose('clientChannel', {
                    fnOnClient: function (param) {
                        return 'whatever you need from client returned ' + param;
                    }
                }).then(
                    function (channel) {
                        console.log(" client channel ready");
                    }
                );
            }
        ).run(function ($rpc, $rootScope) {
                $rpc.connect('http://localhost:8080');   // don't forget port, if you are not on 80
                console.log('run ' + new Date().toJSON());
            });

        var injector = angular.bootstrap(document, ['app']);

    </script>


###With authentication (server)

    rpc.expose('myChannel', {
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

    RPC.loadChannel('myChannel', { pswd: "super secret password" }).then(
        function (channel) {
           ...
        }
    );

