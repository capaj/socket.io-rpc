System.config({
  "paths": {
    "*": "*.js",
    "socket.io-rpc-test-package/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "socket.io-client": "/socket.io/socket.io",
    "angular": "github:angular/bower-angular@1.3.9",
    "npm:bluebird": "npm:bluebird@2.7.1",
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:bluebird@2.7.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

