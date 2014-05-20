'use strict';

module.exports = [
  'TWITTER_UPDATE'
].reduce(function(acc, c) {
  acc[c] = c;
}, {});

