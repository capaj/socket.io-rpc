var express = require('express');

var app = module.exports = express();
app.use(require('morgan')('dev'));

app.set('port', 8081);

var server = app.listen(app.get('port'));
var sendFileOpts = {
	root: './'
};
app.use(express.static(__dirname));

// this block is not normally needed, only we don't have these installed through NPM for tests, so paths are different
app.get('/rpc/client.js', function (req, res) {  // this is not normally needed
    res.sendFile('client/client.js', sendFileOpts);
});
app.get('/rpc/rpc-client-angular-bundle.js', function (req, res) {  // this is not normally needed
	res.sendFile('dist/rpc-client-angular-bundle.js', sendFileOpts);
});
app.get('/rpc/rpc-client-angular-bundle.min.js', function (req, res) {  // this is not normally needed
	res.sendFile('dist/rpc-client-angular-bundle.min.js', sendFileOpts);
});

app.get('/rpc/socket.io-rpc-client.js', function (req, res) {  // this is not normally needed
    res.sendFile('client/socket.io-rpc-client.js', sendFileOpts);
});
app.get('/rpc/rpc-client-angular.js', function (req, res) {  // this is not normally needed
    res.sendFile('client/socket.io-rpc-client-angular.js', sendFileOpts);
});

app.get('/rpc/export-channel.js', function (req, res) {  // this is not normally needed
    res.sendFile('client/export-channel.js', sendFileOpts);
});
//end of the unusual block

var rpc = require('../main.js');
var io = require('socket.io').listen(server);
						//channelTemplates true is default, though you can change it, I would recommend leaving it to true,
						//				   false is good only when your channels are dynamic so there is no point in caching

var rpcMaster = rpc(io, app)
	.expose('./rpc_channel_test', function(handshake, CB) {	//second function/parameter is optional for authenticated channels
		if (handshake.passw == '123') {
			CB(true);
		} else {
			CB(false);
		}
	})
  .expose('./channelDeep/deep2/channelDeep');

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
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

