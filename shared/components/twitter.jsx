/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;

var Tweet = exports.Tweet = createClass({
  render: function () {
    var tweet = this.props.tweet;
    var user = tweet.user;

    return (
      <div className="media tweet">

        <a className="pull-left" href="#">
          <img className="media-object" src={user.image} alt={user.screen_name} />
        </a>

        <div className="media-body">
          <h5 className="media-heading">
            <a href={'https://twitter.com/' + user.screen_name}>
              <strong>{user.screen_name}</strong>
            </a>
          </h5>
          <small>{tweet.text}</small>
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
        <div className="panel-body tweets">
          {this.props.tweets.map(function(t) {
            return <Tweet key={t.id} tweet={t} />
          })}
        </div>
      </div>
    );
  }
});

