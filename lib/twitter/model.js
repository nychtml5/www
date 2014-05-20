'use strict';

var _ = require('lodash');
var moment = require('moment');

function toThis(val, key) {
  this[key] = val;
}

function User(data) {
  if(!data) throw new Error('No data provided for Twitter User');

  this.id = _.uniqueId('user');
  var fields = _.pick(data, 'id_str', 'name', 'profile_image_url', 'screen_name');

  _.each(fields, toThis, this);

  /* jshint camelcase: false */
  this.image = this.profile_image_url || '/images/logo.svg';
}

User.prototype = {
  toJSON: function() {
    var self = this;
    var json = Object.keys(this).reduce(function(acc, key) {
      acc[key] = self[key];
      return acc;
    }, {});

    return json;
  }
};

function Tweet(data) {
  if(!data) throw new Error('No data provided Tweet');

  this.id = _.uniqueId('tweet');
  var fields = _.pick(data, 'id_str', 'text', 'created_at');

  _.each(fields, toThis, this);

  this.user = new User(data.user);

  /* jshint camelcase: false */
  this.date = new Date(this.created_at);
}

Tweet.prototype = {
  toJSON: function() {
    var self = this;
    var json = Object.keys(this).reduce(function(acc, key) {
      acc[key] = self[key];
      return acc;
    }, {});

    json.date = moment(this.date).format('MMM Do YYYY @ h:mm a');
    json.user = json.user.toJSON();
    return json;
  }
};

module.exports = Tweet;
