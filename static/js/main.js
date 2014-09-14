/**
  @jsx React.DOM
*/
var React = require('react');
var AppActions = require('./actions/app-actions.js');

var ApplicationComponent = React.createClass({
  handleClick: function() {
    AppActions.addItem('this is an item');
  },
  render:function(){
    return (
      <div>
        <h1 onClick={this.handleClick}>Flux app headline.</h1>
      </div>
    );
  }
});

React.renderComponent(
  <ApplicationComponent />,
  document.getElementById('main')
);
