/**
  @jsx React.DOM
*/
var React = require('react');

var ApplicationComponent = React.createClass({
  render:function(){
    return (
      <div>
        <h1>Flux app headline.</h1>
      </div>
    );
  }
});

React.renderComponent(
  <ApplicationComponent />,
  document.getElementById('main')
);
