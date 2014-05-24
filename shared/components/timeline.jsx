/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;
var SpeakerList = require('./speaker.jsx').SpeakerList;
var moment = require('moment');

var Meetup = exports.Meetup = createClass({
  render: function () {
    var m = this.props.meetup;
    return (
      <div>
        <h4><a href={m.url}>{m.title}</a></h4>
        <h5>{moment(m.date).format('MMMM Do, YYYY')}</h5>
        <SpeakerList speakers={m.speakers} />
        <hr/>
      </div>
    );
  }
});


exports.Timeline = createClass({
  render: function () {
    return (
      <div className="panel">
        <div className="panel-heading timeline-heading">Timeline</div>
        <div className="panel-body">
          {this.props.meetups.map(function(m) {
            return <Meetup key={m.date} meetup={m} />
          })}
        </div>
      </div>
    );
  }
});


