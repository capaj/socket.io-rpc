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