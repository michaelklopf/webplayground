/**
  @jsx React.DOM
*/
var React = require('react');
var AppActions = require('./actions/app-actions.js');
var App = require('./components/app.js');

React.renderComponent(
  <App />,
  document.getElementById('main')
);
