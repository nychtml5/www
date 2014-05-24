'use strict';

var mapRequire = require('map-require');
var _ = require('lodash');
var path = require('path');
var fs = require('fs');

var PHOTOS_PATH = path.join(__dirname, '..', 'public', 'images', 'speakers');

function appendPhoto(speaker) {
  // filename of image is
  var fname = speaker.name.trim().toLowerCase().replace(' ', '') + '.jpg';
  if (fs.existsSync(path.join(PHOTOS_PATH, fname))) {
    return _.extend({ image: fname }, speaker);
  }

  return speaker;
}

function map(meetup) {
  return _.defaults({
    speakers: meetup.speakers.map(appendPhoto)
  }, meetup);
}

// TODO will probably need a limit or paging at some point
module.exports = mapRequire(path.join(__dirname, '..', 'speakers'), map);

module.exports.sort(function(a, b) {
  return a.date < b.date;
});
