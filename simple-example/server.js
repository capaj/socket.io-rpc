var express = require('express');

var app = module.exports = express();
app.use(require('morgan')('dev'));

app.set('port', 8031);

var server = app.listen(app.get('port'));
app.use(express.static(__dirname));

var rpc = require('../main.js');
var io = require('socket.io').listen(server);

var rpcMaster = rpc(io, app)
	.exposeFile('./rpc_channel_test', function(handshake, CB) {	//second function/parameter is optional for authenticated channels
		if (handshake.passw == '123') {
			CB(true);
		} else {
			CB(false);
		}
	})
    .exposeFile('./channelDeep/deep2/channelDeep')
    .expose('plain', {
        methodInPlain: function() {
            return 41;
        }
    });

io.sockets.on('connection', function (socket) {
    var intId;

    rpcMaster.loadClientChannel(socket, 'clientChannel').then(function (fns) {
        intId = setInterval(function() {
            console.log("cl call " + socket.id);

            fns.fnOnClient("calling client ").then(function (ret) {
                console.log("client returned: " + ret);
            });
        }, 5000);
    });

    socket.on('disconnect', function () {
        console.log("disconnected, stop calling it");
        clearInterval(intId);
    });

});

app.get('/ng', function (req, res) {
    res.sendFile(__dirname  + '/ng.html');
});
app.get('/ie8', function (req, res) {
    res.sendFile(__dirname + '/ie8.html');
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

