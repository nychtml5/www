/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;

var Speaker = exports.Speaker = createClass({
  render: function() {
    var speaker = this.props.speaker;
    var twitter = speaker.twitter;
    var url = twitter ? 'https://twitter.com/' + twitter : speaker.url;

    if (!url) url = '#';

    return (
      <div className="media speaker">
        <a className="pull-left speaker-photo" href={url}>
        {speaker.image ? <img className="media-object" src={'/images/speakers/' + speaker.image} 
            alt={speaker.name} /> : <img style={{visibility: 'none'}} />}
        </a>

        <div className="media-body">
          <h4 className="media-heading">
            {speaker.title} 
          </h4>
          <a href={url}>{speaker.name}</a>
          <br />
          {speaker.desc}
        </div>
      </div>
    );
  }
});

exports.SpeakerList = createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        {(this.props.speakers || []).map(function(s) {
          return <Speaker key={s.name} speaker={s} />
        })}
      </div>
    );
  }
});
