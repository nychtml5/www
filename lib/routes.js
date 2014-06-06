'use strict';

var meetups = require('./meetups');
var React = require('react');
var _ = require('lodash');

var meetupView = require('./views/meetup-com');

module.exports = function(app) {
  // index
  app.get('/', function(req, res) {
    var data = {
      meetups: meetups,
      env: app.get('env')
    };
    res.render('index', data);
  });

  // render meetup
  app.get('/meetup/:year/:month/:day', function(req, res, next) {
    var p = req.params;
    var d = new Date(p.year, p.month - 1, p.day, 18, 30);
    var m = _.find(meetups, function(m) {
      return ['getFullYear', 'getMonth', 'getDate'].every(function(method) {
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
