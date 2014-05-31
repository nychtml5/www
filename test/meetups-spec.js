'use strict';

var _ = require('lodash');
var is = require('is-predicate');
var should = require('chai').should();
var meetups = require('../lib/meetups');

describe('meetups', function() {
  it('should be sorted by latest date', function() {
    meetups.map(_.property('date')).reduce(function(a, b) {
      is.gt(a, b).should.be.ok;
      return b;
    });
  });

  describe('#findNext', function() {
    it('should return a meetup', function() {
      var d = new Date(2014, 5);
      var m = meetups.findNext(d);
      m.should.be.an.object;
      m.date.getFullYear().should.equal(d.getFullYear());
      m.date.getMonth().should.equal(d.getMonth());
    });

    it('should find the next meetup', function() {
      var d = new Date(2014, 4, 30);
      var m = meetups.findNext(d);
      m.should.be.an.object;
      m.date.getFullYear().should.equal(d.getFullYear());
      m.date.getMonth().should.equal(d.getMonth() + 1);
    });

    it('should return null for non existant meetup', function() {
      var d = new Date(3000, 5);
      should.not.exist(meetups.findNext(d));
    });
  });
});
