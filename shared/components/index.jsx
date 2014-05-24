/** @jsx React.DOM */
'use strict';

var _ = require('lodash');
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

//var NavBar = createClass({
//  render: function() {
//    return (
//      <div className="navbar navbar-static">
//        <div className="container">
//          <div className="navbar-header">
//            <a className="navbar-brand" href="http://www.bootply.com" target="ext">NYC HTML5</a>
//          </div>
//          <div className="navbar-right navbar-collapse collapse">
//            <ul className="nav navbar-nav">  
//              <li><a href="http://www.meetup.com/nychtml5">Sign Up</a></li>
//            </ul>
//          </div>
//        </div>
//      </div>
//    );
//  }
//});

module.exports = createClass({
  render: function() {
    var goog = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
      "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),"+
      "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
      "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" +
      "ga('create', 'UA-36148349-3', 'nychtml5.com');ga('send', 'pageview');"
    return (
      <html lang="en">
        <Head />
        <body>
          <Header meetup={_.first(this.props.meetups)} />
          <div className="container">
            <div className="row">
              <div className="well well-sm sponsored">
                Space and Food provided by:
                <br/>
                <img src="/images/cn-125.png" alt="conde nast" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="no-gutter row">
              <div className="col-md-2">
                <About />
              </div>

              <div className="col-md-3">
                <Twitter tweets={this.props.tweets} />
              </div>

              <div className="col-md-7" id="content">
                <Timeline meetups={_.rest(this.props.meetups)}/>
              </div>
            </div>
          </div>
          <script dangerouslySetInnerHTML={{ __html: goog}}>
          </script>
        </body>
      </html>
    );
  }
});
