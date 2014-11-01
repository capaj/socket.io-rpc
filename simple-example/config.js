System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@^1.3.1",
    "bluebird": "npm:bluebird/js/browser/bluebird",
    "npm:bluebird": "npm:bluebird@^2.3.6",
    "socket.io-client": "/socket.io/socket.io",
    "github:jspm/nodelibs@0.0.5": {
      "Base64": "npm:Base64@^0.2.0",
      "base64-js": "npm:base64-js@^0.0.4",
      "ieee754": "npm:ieee754@^1.1.1",
      "inherits": "npm:inherits@^2.0.1",
      "json": "github:systemjs/plugin-json@^0.1.0",
      "pbkdf2-compat": "npm:pbkdf2-compat@^2.0.1",
      "ripemd160": "npm:ripemd160@^0.2.0",
      "sha.js": "npm:sha.js@^2.2.6"
    },
    "npm:Base64@0.2.1": {},
    "npm:base64-js@0.0.4": {},
    "npm:bluebird@2.3.10": {},
    "npm:bluebird@2.3.6": {},
    "npm:ieee754@1.1.4": {},
    "npm:inherits@2.0.1": {},
    "npm:json@9.0.1": {},
    "npm:pbkdf2-compat@2.0.1": {},
    "npm:ripemd160@0.2.0": {},
    "npm:sha.js@2.2.6": {
      "json": "npm:json@^9.0.1"
    }
  }
});

System.config({
  "versions": {
    "github:angular/bower-angular": "1.3.1",
    "github:jspm/nodelibs": "0.0.5",
    "github:systemjs/plugin-json": "0.1.0",
    "npm:Base64": "0.2.1",
    "npm:base64-js": "0.0.4",
    "npm:bluebird": "2.3.10",
    "npm:ieee754": "1.1.4",
    "npm:inherits": "2.0.1",
    "npm:json": "9.0.1",
    "npm:pbkdf2-compat": "2.0.1",
    "npm:ripemd160": "0.2.0",
    "npm:sha.js": "2.2.6"
  }
});

