/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;

var Tweet = exports.Tweets = createClass({
  render: function () {
    return (
      <div className="media tweet">

        <a className="pull-left" href="#">
          <img className="media-object" src="/images/doge.png"/>
        </a>

        <div className="media-body">
          <h5 className="media-heading"><a href="#"><strong>@trevor_landau</strong></a></h5>
          <small>Totally wicked cool</small>
        </div>
      </div>
    );
  }
});

exports.Twitter = createClass({
  render: function () {
    return (
      <div className="panel" id="midCol">
        <div className="panel-heading twitter-heading">#nychtml5</div>
        <div className="panel-body">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    );
  }
});

