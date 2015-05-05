var rpc = require('rpc');
var plain = require('rpc/plain');

var rpcBackend = rpc.rpcProps.backend;
console.log("rpc client loaded");

plain.methodInPlain().then(function(v) {
  console.log("plain call returned ", v);
  //plain.rpcProps.disconnect();  // you can force disconnect like this
});

deepChnl.purpose().then(function(res) {
  console.log('deep channel ', res);
});

rpc.getTime().then(function(date) {
  console.log('time on server is: ' + date);
  setText(document.getElementById('serverTime'), date);

});
rpc.myAsyncTest('passing string as argument').then(function(retVal) {
  console.log('server returned: ' + retVal);
  setText(document.getElementById('asyncText'), retVal);
}, function(er) {
  console.error('error callback called');
});
rpc.failingMethod().catch(function(err) {
  console.error(err);
  //without this empty callback bluebird laments about unhandled error
});    // this will display error prpagated from serverside
rpc.rpcProps._socket.on('disconnect', function() {
  console.log("channel disconnected!");
});


//channel.nonExistentRemoteFn();  // uncomment for typerror to be thrown and handled by otherwise promise method


rpcBackend.expose('clientChannel', {
  fnOnClient: function(param) {
    return 'whatever you need from client returned ' + param;
  }
}).then(function(channel) {
    console.log(" client channel ready");
  }, function(err) {
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