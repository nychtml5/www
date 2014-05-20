/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;
var Header = require('./header.jsx');
var About = require('./about.jsx');
var Twitter = require('./twitter.jsx').Twitter;
var Timeline = require('./timeline.jsx').Timeline;

var Head = createClass({
  render: function() {
    return (
      <head>
        <meta charSet="utf-8"></meta>
        <title>NYC HTML5</title>
        <meta name="generator" content="Bootply" ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="author" content="Trevor Landau"></meta>
        <meta name="description" content="NYC HTML5"></meta>
        <meta name="robots" content="index, follow"></meta>

        <link rel="shortcut icon" type="image/png" href="/images/favicon.png"></link>

        <link href="/css/bootstrap.min.css" rel="stylesheet"></link>
        <link href="/css/font-awesome.min.css" rel="stylesheet"></link>
        <link href="/css/bootply.css" rel="stylesheet"></link>
        <link href="/css/main.css" rel="stylesheet"></link>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet"></link>

        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content="/images/logo.png"></meta>
        <meta property="og:site_name" content="NYC HTML5"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:image" content="http://www.nychtml5.com/images/logo.png"></meta>
        <meta name="twitter:site" content="@nychtml5"></meta>
        <meta name="twitter:creator" content="@nychtml5"></meta>
      </head>
    );
  }
});

var NavBar = createClass({
  render: function() {
    return (
      <div className="navbar navbar-static">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="http://www.bootply.com" target="ext">NYC HTML5</a>
          </div>
          <div className="navbar-right navbar-collapse collapse">
            <ul className="nav navbar-nav">  
              <li><a href="http://www.meetup.com/nychtml5">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = createClass({
  render: function() {
    return (
      <html lang="en">
        <Head />
        <body>
          <NavBar />
          <Header />

        <div className="container">
          <div className="no-gutter row">
            <div className="col-md-2">
              <About />
            </div>

            <div className="col-md-3">
              <Twitter />
            </div>

            <div className="col-md-7" id="content">
              <Timeline />
            </div>
          </div>
        </div>
        </body>
      </html>
    );
  }
});
