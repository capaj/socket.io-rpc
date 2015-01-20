var Promise = require('bluebird');

module.exports = {
  purpose: function() {
    var df = Promise.defer();
    //throw new Error('e'); //this throw is catched and propagated to the client
    setTimeout(function(){
      //throw new Error('e'); //this throw would NOT catched and crashes the process
      df.resolve(42);
    }, 100);
    return df.promise;
  }
};