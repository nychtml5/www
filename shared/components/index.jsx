/** @jsx React.DOM */
'use strict';

var is = require('is-predicate');
var _ = require('lodash');
var React = require('react');
var createClass = React.createClass;
var Header = require('./header.jsx');
var Twitter = require('./twitter.jsx').Twitter;
var Timeline = require('./timeline.jsx').Timeline;

var Head = createClass({
  render: function() {

    var dev = [
      '/vendor/bootstrap.min.css',
      '/bootply.css',
      '/main.css'
    ];

    var prod = ['/main.min.css'];
    var css = _.isEqual(this.props.env, 'production') ? prod : dev;

    // just css link actually
    function toLink(src, ndx) {
      return <link href={'/css' + src} rel="stylesheet" key={ndx} />;
    }

    return (
      <head>
        <meta charSet="utf-8"/>
        <title>NYC HTML5</title>
        <meta name="generator" content="Bootply" ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="author" content="Trevor Landau"></meta>
        <meta name="description" content="NYC HTML5"></meta>
        <meta name="robots" content="index, follow"></meta>

        <link rel="shortcut icon" type="image/png" href="/images/favicon.png"></link>

        <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
        {css.map(toLink)}
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

    var upcoming = this.props.meetups.findNext(new Date());

    return (
      <html lang="en">
        <Head env={this.props.env} />
        <body>
          <div className='container' id="social">
            <div className='pull-right'>
              <a href='https://twitter.com/nychtml5'><i className='fa fa-2x fa-twitter-square'></i></a>&nbsp;
              <a href='https://github.com/nychtml5/www'><i className='fa fa-2x fa-github-square'></i></a>&nbsp;
              irc: <strong>#nychtml5</strong>
            </div>
          </div>
          <Header meetup={upcoming} />
          <div className="container">
            <div className="row">
              <div className="well-sm sponsored">
                Space and Food provided by:
                <br/>
                <img src="/images/cn-125.png" alt="conde nast" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="no-gutter row">
              <div className="col-md-12" id="content">
                <Timeline meetups={_.without(this.props.meetups, upcoming)}/>
              </div>
            </div>
          </div>
          <script dangerouslySetInnerHTML={{ __html: goog }}>
          </script>
        </body>
      </html>
    );
  }
});
