var express = require('express');

var app = module.exports = express();
app.configure(function(){
    app.set('port', 80);
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);

});
var server = app.listen(app.get('port'));

app.get('/rpc/rpc-client.js', function (req, res) {  // this is not normally needed
    res.sendfile('./socket.io-rpc-client.js');
});

var io = require('socket.io').listen(server);
var when = require('when'); // you can use any other http://promises-aplus.github.io/promises-spec/ compliant library
var rpc = require('../main.js');
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



app.get('*', function (req, res) {
    res.sendfile('./tests/index.html');
});

