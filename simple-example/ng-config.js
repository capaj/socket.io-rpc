(function() {
  var config = {
    "paths": {
      "*": "*.js",
      "npm:*": "jspm_packages/npm/*.js",
      "github:*": "jspm_packages/github/*.js",
      "rpc:*": "/rpc/*.js"
    },
    // any map config
    map: {
      "socket.io-client": "/socket.io/socket.io",
      "angular": "github:angular/bower-angular@^1.3.1"
    },
    "versions": {
      "github:angular/bower-angular": "1.3.3"
    }

    // etc. any SystemJS config
  };
  if (typeof module === 'undefined') {
    System.config(config);
  } else {
    module.exports = config;
  }
})();
