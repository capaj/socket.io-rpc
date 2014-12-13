System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "bluebird": "npm:bluebird@2.3.11/js/browser/bluebird",
    "client.js": "/rpc/client.js",
    "npm:bluebird": "npm:bluebird@2.3.11",
    "socket.io-client": "/socket.io/socket.io",
    "github:jspm/nodelibs@0.0.5": {
      "Base64": "npm:Base64@0.2.1",
      "base64-js": "npm:base64-js@0.0.4",
      "ieee754": "npm:ieee754@1.1.4",
      "inherits": "npm:inherits@2.0.1",
      "json": "github:systemjs/plugin-json@0.1.0",
      "pbkdf2-compat": "npm:pbkdf2-compat@2.0.1",
      "ripemd160": "npm:ripemd160@0.2.0",
      "sha.js": "npm:sha.js@2.2.6"
    },
    "github:jspm/nodelibs@0.0.7": {
      "Base64": "npm:Base64@0.2.1",
      "base64-js": "npm:base64-js@0.0.4",
      "ieee754": "npm:ieee754@1.1.4",
      "inherits": "npm:inherits@2.0.1",
      "json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:sha.js@2.2.6": {
      "json": "npm:json@9.0.1"
    }
  }
});

