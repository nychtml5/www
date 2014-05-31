'use strict';

var express = require('express');
var path = require('path');

var request = require('supertest');
var callbackWith = require('callback-with');
var chai = require('chai');
var should = chai.should();
chai.use(require('sinon-chai'));
var sinon = require('sinon');

var formattedTweets = require('./fixtures/tweets-formatted');

var twitter = require('../lib/twitter');
var initRoutes = require('../lib/routes');

var app = express();

app.set('views', path.join(__dirname, '..', 'shared', 'components'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({ static: false }));

initRoutes(app);

describe('GET /', function() {
  before(function() {
    this.tweetStub = sinon.stub(twitter, 'get', callbackWith(null, formattedTweets));
  });

  afterEach(function() {
    twitter.get.reset();
  });

  after(function() {
    twitter.get.restore();
  });

  it('should respond with 200', function(done) {
    request(app).get('/').expect(200, done);
  });

  it('should call twitter', function(done) {
    request(app).get('/').end(function() {
      this.tweetStub.should.be.calledOnce;
      done();
    }.bind(this));
  });
});

describe('GET /meetup/:year/:month/:day', function() {
  it('should respond with 200', function(done) {
    request(app).get('/meetup/2014/6/18').expect(200, done);
  });

  it('should respond with 404', function(done) {
    request(app).get('/meetup/2014/6/17').expect(404, done);
  });
});
