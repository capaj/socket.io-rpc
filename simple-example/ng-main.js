var RPC = require('rpc:rpc-client-angular');

angular.module('app', ['RPC']).controller('testCtrl', function($scope, $RPC, rpc_channel_test) {
  rpc_channel_test.myAsyncTest('passing string as argument').then(function(retVal) {
    console.log('server returned: ' + retVal);
    $scope.asyncTest = retVal;
  }, function(er) {
    console.error(er);
  });
  rpc_channel_test.failingMethod();    // this will display error propagated from serverside
  $scope.getTime = function() {
    rpc_channel_test.getTime().then(function(date) {
      console.log('time on server is: ' + date);
      $scope.serverTime = date;
      //no need to call $scope.$apply, because it is called in $rpc;
    });
  };
  $scope.getTime();
  console.log('ctr run ' + new Date().toJSON());
}).controller('secondCtrl', function($scope, plain) {
  plain.methodInPlain().then(function(retVal) {
    console.log('server returned: ' + retVal);
    $scope.asyncTest = retVal;
  }, function(er) {
    console.error(er);
  });

  console.log('ctr run ' + new Date().toJSON());
}).run(function($RPC, $rootScope, $timeout) {
//            var backend1 = $rpc('http://192.168.43.44:8081');   // don't forget port, if you are not on 80
  var backend1 = $RPC('http://localhost:8081');   // don't forget port, if you are not on 80
//            var backend2 = $rpc('http://localhost:8082');   // don't forget port, if you are not on 80
  $rootScope.authHash = function() {
    return {passw: '123'};
  };
  console.log('ng run ' + new Date().toJSON());
  backend1.expose('clientChannel', {
    fnOnClient: function(param) {
      console.log("client method called");
      return 'whatever you need from client returned ' + param;
    }
  }).then(function(channel) {
    console.log(" client channel ready");
  });
  $rootScope.backend1 = backend1; //backend is not needed on scope, but it would be needed if we wanted to work
//            $rootScope.backend2 = backend2; //backend is not needed on scope, but it would be needed if we wanted to work
  // with multiple connections
});

