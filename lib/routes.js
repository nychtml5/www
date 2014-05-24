'use strict';

var async = require('async');
var twitter = require('./twitter');
var meetups = require('./meetups');

module.exports = function(app) {
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
};
