'use strict';

var express = require('express');
var path = require('path');
var stylus = require('stylus');
var createDomain = require('domain').createDomain;
var is = require('is-predicate');
var connect = require('connect');

var app = module.exports = express();

app.use(function(req, res, next) {
  var d = createDomain();
  d.add(req);
  d.add(res);

  d.on('error', function(req, res, err) {
    next(err);
  }.bind(d, req, res));

  d.run(next);
});

var env = process.env;
app.set('env', env.NODE_ENV);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '..', 'shared', 'components'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// caching
app.use(function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=' + (60 * 60 * 24)); // cache for a day
  next();
});

app.use(connect.compress());
app.use(connect.favicon());
app.use(connect.json());
app.use(connect.urlencoded());
app.use(connect.methodOverride());

if (is.not.equal(app.get('env'), 'production')) {
  app.use(connect.logger('dev'));

  app.use('/css', stylus.middleware({
    dest: path.join(__dirname, '..', 'public', 'css'),
    src: path.join(__dirname, '..', 'public', 'styl'),
    force: true
  }));

}

app.use(connect.static(path.join(__dirname, '..', 'public')));
require('./routes')(app);
app.use(connect.errorHandler());

// ALWAYS DEFINE LAST
app.use(function errHandler(err, req, res, /* jshint unused: false */ next) {
  // TODO 500 page
  res.send(500);
});

