/**
* @jsx React.DOM
*/

var Profile = Backbone.Model.extend({
  defaults : {
    name    : null,
    gender  : null,
    picture : null
  }
});

var profile = new Profile({
  name    : "Christopher Pitt",
  gender  : "male",
  picture : "/img/avatar-01.svg"
});

var CardComponent = React.createClass({
  render : function() {
    return (
      <div className="card">
        <div className="picture">
          <img src={this.props.profile.get("picture")} />
        </div>
        <div className="name">
          {this.props.profile.get("name")}
          <small>
            &nbsp;({this.props.profile.get("gender")})
          </small>
        </div>
      </div>
    );
  }
});

React.renderComponent(
  <CardComponent profile={profile} />,
  document.body
);
