# socket.io-rpc
Minimalistic remote procedure call(RPC/RMI) library bootstrapped on socket.io
## Usage example
###Serverside
<pre>
var io = require('socket.io').listen(server);

var rpc = require('socket.io-rpc');
rpc.createMaster(io, app);
rpc.expose('myChannel', {
    getTime: function () {
        return new Date();
    },
    myTest: function (param) {
        return "String generated serverside with " + param;
    }
});
</pre>

###In browser
<pre>
script src="/socket.io/socket.io.js"></script>
script src="js/q.js"></script>
script src="/rpc-client.js"></script>
script>
    var socket = io.connect('http://localhost/');

    RPC.connect('http://localhost');
    RPC.loadChannel('myChannel').then(
        function (channel) {
            channel.getTime().then(function (date) {
                console.log('time on server is: ' + date);

            });
            channel.myTest('passing string as argument').then(function(retVal){
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
/script>
</pre>
*Sorry for missing "<" but I could not figure out another way to write HTML tags inside readme.md.
