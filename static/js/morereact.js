/** @jsx React.DOM */
// Use react-tools to pre-compile JSX for better performance
/*React.renderComponent(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);*/

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);
