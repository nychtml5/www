'use strict';

var async = require('async');
var twitter = require('./twitter');

module.exports = function(app) {
  app.get('/', function(req, res, next) {

    async.parallel({
      tweets: twitter.get
    }, function(err, results) {
      if (err) return next(err);
      res.render('index', results);
    });
  });
};
