/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;

module.exports = createClass({
  render: function () {
    return (
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
            <a href="https://twitter.com/nychtml5"><i className="fa fa-2x fa-twitter-square"></i></a>&nbsp;
            <a href="https://github.com/nychtml5/www"><i className="fa fa-2x fa-github-square"></i></a>&nbsp;
          </div>

        </div>
      </div>
    );
  }
});
