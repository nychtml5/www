'use strict';

var consts = require('../consts');
var $ = require('jquery');

module.exports = {
  getTweets: function() {
    var xhr = $.ajax({
      context: this,
      url: '/tweets'
    });

    xhr.done(function(data) {
      this.dispatch(consts.TWITTER_UPDATE, data);
    });

    return xhr;
  },

  shouldPollTweets: true,
  pollTime: 1e3 * 60,

  pollTweets: function() {
    var self = this;
    if (!this.shouldPollTweets) return;

    this.tweetTimer = setTimeout(function() {
      var xhr = self.getTweets();
      xhr.always(function() {
        self.pollTweets();
      });
    }, this.pollTime);

    return this.tweetTimer;
  },

  stopPollingTweets: function() {
    this.shouldTweet = false;
    clearInterval(this.tweetTimer);
  }
};
