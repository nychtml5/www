'use strict';

var _ = require('lodash');
var async = require('async');
var Twitter = require('twitter');
var cache = require('memory-cache');

/* jshint camelcase: false */
var config = {
  consumer_key: 'AuCTJJkwLGemXxxi2IPag',
  consumer_secret: '4IIpSfjPbvUNEN3scPogNVuC5Wbseabn2T97kRR1tms',
  access_token_key: '2296757942-WIkUaGQyHxHsSe6W4KsWnXStZo9Up6cw5LLqsQq',
  access_token_secret: 'esTngppPSimuksCGoeb3UUjkDtYawzgGy3adwiO6eP1tX'
};

var twitter = new Twitter(config);

function parseUser(data) {
  return _.extend({
    id: _.uniqueId('user'),
    /* jshint camelcase: false */
    image: data.profile_image_url
  }, _.pick(data, 'id_str', 'name', 'screen_name'));
}

function parseTweet(data) {
  return _.extend({
    id: _.uniqueId('tweet'),
    user: parseUser(data.user),
    /* jshint camelcase: false */
    createdAt: +(new Date(data.created_at))
  }, _.pick(data, 'id_str', 'text'));
}

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

    tweets = data.map(parseTweet);

    cache.put(CACHE_KEY, tweets, CACHE_TIME);
    cb(null, tweets);
  });
};

exports.getMentions = function(cb) {
  var CACHE_KEY = 'MENTIONS';

  var tweets = cache.get(CACHE_KEY);

  if (tweets) {
    return process.nextTick(function() {
      cb(null, tweets);
    });
  }

  /* jshint camelcase: false */
  var opts = {
  };

  // https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
  /* jshint camelcase: true */
  twitter.get('/statuses/mentions_timeline.json', opts, function (data) {
    if (!Array.isArray(data)) return cb(new Error('No twitter data available'));

    tweets = data.map(parseTweet);

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

  function getMentions(done) {
    exports.getMentions(function(err, t) {
      if (err) t = [];
      done(null, t);
    });
  }

  // I think there is some sort of "mutable" bug for twitter api
  // that doesn't allow parallel...so use series
  async.series([getTweets, getMentions], function(err, results) {
    if (err) return cb(err);
    var tweets = _.flatten(results);

    tweets.sort(function(a, b) {
      /* jshint camelcase: false */
      return a.createdAt < b.createdAt;
    });

    tweets = _.uniq(tweets, true, _.property('text'));
    cb(null, tweets);
  });
};
