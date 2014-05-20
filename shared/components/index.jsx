/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;
var Header = require('./header.jsx');

var Head = createClass({
  render: function() {
    return (
      <head>
        <meta charset="utf-8"></meta>
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

module.exports = createClass({
  render: function() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Header />


        <div className="container">
          <div className="no-gutter row">
            <div className="col-md-2">
              <div className="panel panel-default" id="sidebar">
                <div className="panel-heading about-heading">About</div>
                <div className="panel-body">
                  <h5>NYC HTML5 is a user group focused on JavaScript technologies.</h5>
                  <a role="button" className="btn btn-danger" href="http://www.meetup.com/nychtml5/">
                    Join Today!
                  </a>
                  <hr/>

                  <div>
                    Interested in speaking?
                    <a href="https://github.com/nychtml5/www/wiki/I-want-to-speak!">Open an issue</a>
                    &nbsp;or contact <a href="https://twitter.com/johnkpaul">John Paul</a>,
                    &nbsp;<a href="https://twitter.com/joe_sepi">JoeSepi</a>, or
                    &nbsp;<a href="https://twitter.com/trevor_landau">Trevor Landau</a>
                  </div>

                  <hr/>

                  <div>
                    irc: <strong>#nychtml5</strong>
                  </div>

                  <hr/>

                  <div className="col col-span-12">
                    <a href="https://twitter.com/nychtml5"><i className="icon-2x icon-twitter"></i></a>&nbsp;
                    <a href="https://github.com/nychtml5/www"><i className="icon-2x icon-github"></i></a>&nbsp;
                  </div>

                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="panel" id="midCol">
                <div className="panel-heading twitter-heading">#nychtml5</div>
                <div className="panel-body">
                  <div className="media">

                    <a className="pull-left" href="#">
                      <img className="media-object" src="http://placedoge.net/50/50"/>
                    </a>

                    <div className="media-body">
                      <h5 className="media-heading"><a href="#"><strong>@trevor_landau</strong></a></h5>
                      <small>Totally wicked cool</small>
                    <br/>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-md-7" id="content">
              <div className="panel">
                <div className="panel-heading timeline-heading">Timeline</div>
                <div className="panel-body">
                  <h4>Amorphic, D3 in Ember, and Preloading Multimedia: Can Play Through?</h4>
                  <h5><em>May 16th, 2014</em></h5>
                  <br/>
                  <div className="media">
                    <a className="pull-left" href="#">
                      <img className="media-object" src="http://placedoge.net/100/100" alt="..."/>
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading">Exploring Chrome DevTools less used potential Kirill Cherkashin</h4>
                      Often DevTools is used just for basic JavaScript debugging, but there is much more behind it than what is commonly used. In this talk we will go through an overview of some Chrome DevTools features, such as workspaces, snippets, shortcuts, extensions and several others. The goal is to showcase the less known and less used sides of Chrome DevTools so that we can make best use of what it can offer.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </body>
      </html>
    );
  }
});
