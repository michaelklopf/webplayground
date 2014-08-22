/**
 * @jsx React.DOM
 */
// Mix of directly calling components and using an interface
var FooComponent = React.createClass({
  render : function() {
    return <div>foo</div>;
  }
});

var BarComponent = React.createClass({
  render : function() {
    return <div>bar</div>;
  }
});

var BroComponent = React.createClass({
  render : function() {
    return <div>bro</div>;
  }
});

var MobComponent = React.createClass({
  render : function() {
    return <div>mob</div>;
  }
});

var InterfaceComponent = React.createClass({
  componentWillMount : function() {
    this.callback = (function() {
      this.forceUpdate();
    }).bind(this);

    this.props.router.on("route", this.callback);
  },
  componentWillUnmount : function() {
    this.props.router.off("route", this.callback);
  },
  render : function() {
    if (this.props.router.current === "bro") {
      return <BroComponent />;
    }
    if (this.props.router.current === "mob") {
      return <MobComponent />;
    }
    return <div />;
  }
});

var Router = Backbone.Router.extend({
  routes : {
    //""    : "index",
    "foo" : "foo",
    "bar" : "bar",
    "bro" : "bro",
    "mob" : "mob"
  },/*
  index : function() {
    console.log("index");
  },*/
  foo : function() {
    React.renderComponent(
      <FooComponent />,
      document.body
    );
  },
  bar : function() {
    React.renderComponent(
      <BarComponent />,
      document.body
    );
  },
  bro : function() {
    this.current = "bro";
  },
  mob : function() {
    this.current = "mob";
  }
});

var router = new Router();

React.renderComponent(
  <InterfaceComponent router={router} />,
  document.body
);

Backbone.history.start();
