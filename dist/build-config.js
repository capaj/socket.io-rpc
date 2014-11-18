(function() {
  var config = {
    "paths": {
      "*": "*.js",
      "npm:*": "jspm_packages/npm/*.js",
      "github:*": "jspm_packages/github/*.js",
      "rpc:*": "client/*.js"

    },
    // any map config
    map: {
      "socket.io-client": "node_modules/socket.io-client/socket.io",
      "socket.io-rpc-client-angular": "client/socket.io-rpc-client-angular",
      "angular": "github:angular/bower-angular@^1.3.3"
    },
    "versions": {
      "github:angular/bower-angular": "1.3.3"
    }

    // etc. any SystemJS config
  };
  if (!module) {
    System.config(config);
  } else {
    module.exports = config;
  }
})();