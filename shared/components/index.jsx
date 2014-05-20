/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <html lang="en">
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
          <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet"></link>
          <link href="/css/bootply.css" rel="stylesheet"></link>
          <link href="/css/main.css" rel="stylesheet"></link>
          <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet"></link>
          <link rel="shortcut icon" type="image/png" href="/images/favicon.png"></link>
          <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" type="text/css" rel="stylesheet"></link>

          <meta property="og:type" content="website"></meta>
          <meta property="og:image" content="/images/logo.png"></meta>
          <meta property="og:site_name" content="NYC HTML5"></meta>
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:image" content="http://www.nychtml5.com/images/logo.png"></meta>
          <meta name="twitter:site" content="@nychtml5"></meta>
          <meta name="twitter:creator" content="@nychtml5"></meta>
        </head>

        <body>

        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <img className="brand" src="/images/logo.svg" alt="NYC HTML5"/>
              </div>
              <div className="col-md-10">
                <div className="page-header">
                  <h3 className="heading">{"{ Next Event }"}</h3>
                  <h2>
                    <a href="/">Amorphic, D3 in Ember, and Preloading Multimedia: Can Play Through?</a>
                  </h2>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-md-6">
                <div className="media">
                  <a className="pull-left" href="#">
                    <img className="media-object" src="http://placedoge.net/100/100" alt="..."/>
                  </a>
                  <div className="media-body">
                    <h4 className="media-heading">Exploring Chrome DevTools' less used potential Kirill Cherkashin</h4>
                    Often DevTools is used just for basic JavaScript debugging, but there is much more behind it than what is commonly used. In this talk we will go through an overview of some Chrome DevTools features, such as workspaces, snippets, shortcuts, extensions and several others. The goal is to showcase the less known and less used sides of Chrome DevTools so that we can make best use of what it can offer.
                  </div>
                </div>
              </div>

              <div className="col-md-6" id="logistics">
                <h4 className="heading">{"{ Logistics }"}</h4>
                <table>
                  <tr>
                    <td>Date:</td>
                    <td>June 16th, 2014</td>
                  </tr>
                  <tr>
                    <td>Location:</td>
                    <td>4 Times Square</td>
                  </tr>
                  <tr>
                    <td>Schedule:</td>
                    <td>
                      <p><strong>6:30 - 7:00 PM</strong> Pizza + discussion 5th Floor, Self Conference Room</p>

                      <p><strong>7:00 - 8:15 PM</strong> Talks + questions 4th Floor Auditorium</p>

                      <p><strong>8:15 PM</strong> - Drinks at Heartland Brewery</p>
                  </td>
                  </tr>
                </table>
                <div className="well well-md">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.284184248123!2d-73.9860064!3d40.755773899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854d5ec1c43%3A0x2ca611edf127154b!2sConde+Nast+Bldg!5e0!3m2!1sen!2sus!4v1400436810661" width="100%" height="260" frameborder="0"></iframe>
                </div>
                <div className="alert alert-warning">
                  NYC HTML5 expects all speakers and attendees to follow the <a href="http://jsconf.com/codeofconduct.html" className="alert-link">JSCONF</a> code of conduct.
                </div>
              </div>
            </div>
          </div>
        </header>

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
                    or contact
                    <a href="https://twitter.com/johnkpaul">John Paul</a>,
                    <a href="https://twitter.com/joe_sepi">JoeSepi</a>, or
                    <a href="https://twitter.com/trevor_landau">Trevor Landau</a>
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
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        </body>
      </html>
    );
  }
});
