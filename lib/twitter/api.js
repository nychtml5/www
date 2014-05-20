'use strict';

var _ = require('lodash');
var async = require('async');
var Tweets = require('./collection');
var Twitter = require('twitter');
var twitter = new Twitter(require('./config'));
var cache = require('memory-cache');

var CACHE_TIME = 1e3 * 60 * 15; // 15 min cache time

exports.getTweets = function(cb) {
  var CACHE_KEY = 'TWEETS';
  var tweets = cache.get(CACHE_KEY);

  if (tweets) {
    return process.nextTick(function() {
      cb(null, tweets);
    });
  }

  /* jshint camelcase: false */
  var opts = {
    screen_name: 'nychtml5',
    include_rts: true,
    exclude_replies: false
  };


  // https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
  /* jshint camelcase: true */
  twitter.get('/statuses/user_timeline.json', opts, function (data) {
    if (!Array.isArray(data)) return cb(new Error('No twitter data available'));

    tweets = new Tweets(data);

    cache.put(CACHE_KEY, tweets, CACHE_TIME);
    cb(null, tweets);
  });
};

exports.getHashTags = function(cb) {
  var CACHE_KEY = 'HASH_TAGS';

  var tweets = cache.get(CACHE_KEY);

  if (tweets) {
    return process.nextTick(function() {
      cb(null, tweets);
    });
  }

  /* jshint camelcase: false */
  var opts = {
    screen_name: 'nychtml5',
    include_rts: true,
    exclude_replies: false
  };

  // https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
  /* jshint camelcase: true */
  twitter.get('/statuses/user_timeline.json', opts, function (data) {
    if (!Array.isArray(data)) return cb(new Error('No twitter data available'));

    tweets = new Tweets(data);

    cache.put(CACHE_KEY, tweets, CACHE_TIME);
    cb(null, tweets);
  });
};

exports.get = function(cb) {
  function getTweets(done) {
    exports.getTweets(function(err, t) {
      if (err) t = [];
      done(null, t);
    });
  }

  function getHashTags(done) {
    exports.getHashTags(function(err, t) {
      if (err) t = [];
      done(null, t);
    });
  }

  async.parallel([getTweets], function(err, results) {
    if (err) return cb(err);
    var tweets = _.flatten(_.invoke(results, 'toJSON'));

    tweets.sort(function(a, b) {
      /* jshint camelcase: false */
      return a.created_at > b.created_at;
    });

    cb(null, tweets);
  });
};
