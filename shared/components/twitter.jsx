/** @jsx React.DOM */
'use strict';

var _ = require('lodash');
var React = require('react');
var createClass = React.createClass;

var linkRgx = /http(s)?:\/\/[\d\w_\.\/]+/g;
var hashRgx = /#[\d\w_]+/g;
var handleRgx = /(^|[^@\w])@(\w{1,15})\b/g;

function parseText(text) {
  // Replace links
  return text.replace(linkRgx, function (text) {
    return '<a href=\'' + text + '\' target=\'_blank\'>' + text + '</a>';
  })
  // Replace hash tags
  .replace(hashRgx, function (text) {
    var comp = encodeURIComponent(text);
    return '<a href=\'https://twitter.com/#!/search/?q=' + comp + '&src=hash\' target=\'_blank\'>' +
      text + '</a>';
  })
  // Replace twitter handles
  .replace(handleRgx, function (text) {
    return '<a href=\'https://twitter.com/' + text.trim() + '\' target=\'_blank\'>' + text + '</a>';
  });
}

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
          <small dangerouslySetInnerHTML={{ __html: parseText(tweet.text) }}></small>
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
          {this.props.tweets.slice(0, 10).map(function(t) {
            return <Tweet key={t.id} tweet={t} />
          })}
        </div>
      </div>
    );
  }
});
