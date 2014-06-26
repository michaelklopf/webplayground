'use strict';

requirejs.config({
  baseUrl : '/lib',

  paths :  {
    js: '/js'
  }
});

requirejs(
  ['/js/register.js']
);
