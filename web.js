// web.js

// set up
var express     = require('express');
var http        = require('http');
var fs          = require('fs');
var jade        = require('jade');
// var mongoose    = require('mongoose');
var flash       = require('connect-flash');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var methodOverride = require('method-override');
var session     = require('express-session');
var env         = require('node-env-file');
var data        = [];

// load env vars
env(__dirname + '/.env');

// create and configure express app
var app = express();

app.use(cookieParser(process.env.SECRETAUTH));
app.use(bodyParser());
app.use(session({secret: process.env.SESSIONKEY, cookie: {maxAge: 60000 }}));
app.use(methodOverride());

app.use("/css" , express.static(__dirname + '/static/css'));
app.use("/lib", express.static(__dirname + '/bower_components'))
app.use("/js" , express.static(__dirname + '/static/js'));
app.use("/distjs" , express.static(__dirname + '/dist/js'));
app.use("/fonts", express.static(__dirname + '/static/fonts'));
app.use("/img", express.static(__dirname + '/static/img'));
app.use("/json", express.static(__dirname + '/static/json'));
app.use("/components", express.static(__dirname + '/static/components'));
app.use("/mycomponents", express.static(__dirname + '/static/mycomponents'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 80);

app.use(flash());

// application routes
app.get('/', function(req, res) {
  res.contentType('text/html');
  res.sendfile(__dirname + '/views/index.html');
});

app.get('/events', function(req, res) {
  res.contentType('text/html');
  res.render('events');
});

app.get('/register', function(req, res) {
  res.contentType('text/html');
  res.render('register');
});

app.get('/react', function(req, res) {
  res.contentType('text/html');
  res.render('reacttest');
});

app.get('/polymer', function(req, res) {
  res.contentType('text/html');
  res.sendfile(__dirname + '/views/polymer.html');
});

app.get('/marionette', function(req, res) {
  res.contentType('text/html');
  res.sendfile(__dirname + '/views/marionette.html');
});

app.get('/listcreator', function(req, res) {
  res.contentType('text/html');
  res.render('listCreator');
});

app.get('/morereact', function(req, res) {
  res.contentType('text/html');
  res.sendfile(__dirname + '/views/morereact.html');
});

app.get('/comments', function(req, res) {
  if (data.length === 0) {
    data = [
      {author: "Pete Hunt", text: "This is one huge big unprecedented comment"},
      {author: "Jordan Walke", text: "This is *another* comment"}
    ];
  }
  res.contentType('json');
  res.send(data);
});

app.post('/comments', function(req, res) {
  data.push(req.body);
  res.contentType('json');
  res.send(data);
});

app.get('/backbonereact', function(req, res) {
  res.contentType('text/html');
  res.sendfile(__dirname + '/views/backbonereact.html');
});

app.get('/flux', function(req, res) {
  res.contentType('text/html');
  res.sendfile(__dirname + '/dist/flux.html');
});

// For seeing changes without stoping, starting the server, install nodemon globally npm install -g nodemon. Start your server with nodemon server.js
http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
