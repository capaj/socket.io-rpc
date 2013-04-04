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

###Clientside
<pre>
<script src="/socket.io/socket.io.js"></script>
<script src="js/q.js"></script>
<script src="/rpc-client.js"></script>
<script>
    var socket = io.connect('http://localhost/');

    RPC.connect('http://localhost');
    RPC.onChannelLoaded('myChannel', function (channel) {
        channel.getTime().then(function (date) {
            console.log('time on server is: ' + date);

        });
        channel.myTest('passing string as argument').then(function(retVal){
			console.log('server returned: ' + retVal);
		});
    });
</script>
</pre>