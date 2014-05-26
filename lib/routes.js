'use strict';

var async = require('async');
var twitter = require('./twitter');
var meetups = require('./meetups');
var React = require('react');
var _ = require('lodash');

var meetupView = require('./views/meetup-com');

module.exports = function(app) {
  // index
  app.get('/', function(req, res, next) {

    async.parallel({
      tweets: twitter.get
    }, function(err, results) {
      if (err) return next(err);

      results.meetups = meetups;
      results.env = app.get('env');
      res.render('index', results);
    });
  });

  // render meetup
  app.get('/meetup/:year/:month/:day', function(req, res, next) {
    console.log(req.params);
    var p = req.params;
    var d = new Date(p.year, p.month - 1, p.day, 18, 30);
    var m = _.find(meetups, function(m) {
      return ['getFullYear', 'getMonth', 'getDate'].every(function(method) {
        console.log(d[method](),m.date[method]());
        return d[method]() === m.date[method]();
      });
    });

    res.type('html');
    if (!m) return res.send(404);

    try {
      res.send(200, React.renderComponentToStaticMarkup(meetupView(m)));
    } catch(e) {
      next(e);
    }
  });
};
