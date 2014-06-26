define(
  ['/lib/jquery/dist/jquery.min.js'],

  function() {
    var Register = (function() {
      'use strict';

      var
        result = null,
        fn = {},
      end;

      fn = {
        sayHello : function() {
          console.log("Hello from the Register");
        },
        printHeadingToConsole : function() {
          console.log($('h2').text());
        }
      };

      return fn;
    })();

    $(document).ready(function() {
      Register.sayHello();
      Register.printHeadingToConsole();
    });
  }
)
