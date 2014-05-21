/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;
var SpeakerList = require('./speaker.jsx').SpeakerList;
var moment = require('moment');

var Meetup = exports.Meetup = createClass({
  render: function () {
    return (
      <div>
        <h4>{this.props.meetup.title}</h4>
        <h5>{moment(this.props.meetup.date).format('MMMM Do, YYYY')}</h5>
        <br/>
        <SpeakerList speakers={this.props.meetup.speakers} />
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
            return <Meetup meetup={m} />
          })}
        </div>
      </div>
    );
  }
});


