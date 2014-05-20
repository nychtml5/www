'use strict';

var Tweet = require('./model');
var _ = require('lodash');

function Tweets(data) {
  this.models = data.map(function(d) {
    return new Tweet(d);
  });
}

Tweets.prototype = {
  map: function(cb, ctx) {
    return this.models.map(cb, ctx);
  },
  toJSON: function() {
    return _.invoke(this.models, 'toJSON');
  }
};

module.exports = Tweets;
