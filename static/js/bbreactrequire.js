require.config({
  "baseUrl" : "/js",
  "paths"   : {
    "jquery"     : "path/to/jquery",
    "underscore" : "paht/to/underscore",
    "backbone"   : "path/to/backbone",
    "react"      : "path/to/react"
  },
  "shim" : {
    "backbone" : {
      "deps" : [
        "jquery",
        "underscore"
      ],
      "exports" : "Backbone"
    },
    "jquery" : {
      "exports" : "$"
    },
    "underscore" : {
      "exports" : "_"
    }
  }
});

require(["backbone", "router"], function(Backbone, Router) {
  new Router();
  Backbone.history.start();
});
