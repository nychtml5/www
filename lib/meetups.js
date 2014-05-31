'use strict';

var mapRequire = require('map-require');
var _ = require('lodash');
var is = require('is-predicate');
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

var meetups = module.exports = mapRequire(path.join(__dirname, '..', 'speakers'), map);

// newest at the beginning
meetups.sort(function(a, b) {
  return is.less(a.date, b.date);
});

/**
 *  Finds the next meetup based on a given date
 *
 *  @param {Date} d
 *
 *  return {Object} - a meetup object
 */
meetups.findNext = function (d) {

  var found = _.find(meetups, function(meetup) {
    return ['getFullYear', 'getMonth'].every(function(fn) {
      return is.equal(meetup.date[fn](), d[fn]());
    });
  });

  if (!found) return null;

  // meetup is from the past, get next one by adding a month
  if (is.less(found.date.getDate(), d.getDate())) {
    return meetups[meetups.indexOf(found) - 1];
  }

  return found;
};
