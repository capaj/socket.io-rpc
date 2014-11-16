var myChannel = require('./simple-example/rpc_channel_test');
var deepChnl = require('./simple-example/channelDeep/deep2/channelDeep');

var rpcBackend = myChannel._backend;
console.log("rpc client loaded");

deepChnl.purpose().then(function(res) {
  console.log(res);
});

myChannel.getTime().then(function(date) {
  console.log('time on server is: ' + date);
  setText(document.getElementById('serverTime'), date);

});
myChannel.myAsyncTest('passing string as argument').then(function(retVal) {
  console.log('server returned: ' + retVal);
  setText(document.getElementById('asyncText'), retVal);
}, function(er) {
  console.error('error callback called');
});
myChannel.failingMethod().catch(function(err) {
  console.error(err);
  //without this empty callback bluebird laments about unhandled error
});    // this will display error prpagated from serverside
myChannel._socket.on('disconnect', function() {
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