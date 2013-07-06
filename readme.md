# socket.io-rpc  [![NPM version](https://badge.fury.io/js/socket.io-rpc.png)](http://badge.fury.io/js/socket.io-rpc)

Minimalistic remote procedure call(RPC/RMI) library bootstrapped on socket.io and when.js. Has two client libraries-one for general use, other for AngularJS.

Whole library is heavily depending on promises. When calling over network, promise is always returned.


## ChangeLog
    0.0.8 -> 0.0.9 Switched from Q to when.js for better performance


## Browser support
    numbers are for standalone client(author's guess):
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
    <script src="/rpc/when.js"></script>    // for optimal performace download and use here minified version, use this for development or for non-performance critical scenarios
    <script src="/rpc/rpc-client.js"></script>
    <script>
        RPC.connect('http://localhost'); // don't forget port, if you are not on 80
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

    <script src="/socket.io/socket.io.js"></script>
    <script src="/rpc/rpc-client-angular.js"></script>
    <script>
        angular.module('app', ['RPC']).controller('myCtrl', 
            function myCtrl($scope, $rpc){
                $rpc.connect('http://localhost');   // don't forget port, if you are not on 80
                $rpc.loadChannel('myChannel').then(
                    function (channel) {
                        channel.getTime().then(function (date) {
                            console.log('time on server is: ' + date);
                            //no need to call $scope.$apply, because it is called in $rpc;
                        });
                        // Angular templating engine can interpret promises on its own, so if you bind serverTime to template, it should show the value once it resolves
                        $scope.serverTime = channel.getTime();
                        
                        channel.myAsyncTest('passing string as argument').then(function(retVal){
                            console.log('server returned: ' + retVal);
                        });
                        
                    }
                );
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
        )
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

