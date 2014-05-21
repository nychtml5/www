'use strict';

var consts = require('../consts');
var createStore = require('fluxxor').createStore;

var actions = {};
actions[consts.TWITTER_UPDATE] = 'onUpdate';

var CHANGE = 'change';

module.exports = createStore({
  actions: actions,

  initialize: function() {
    this.tweets = [];
  },

  onUpdate: function(tweets) {
    this.tweets = tweets; // TODO manually diff data????
    this.emit(CHANGE);
  }
});
