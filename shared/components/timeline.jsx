/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;
var SpeakerList = require('./speaker.jsx').SpeakerList;

var Meetup = exports.Meetup = createClass({
  render: function () {
    return (
      <div>
        <h4>Amorphic, D3 in Ember, and Preloading Multimedia: Can Play Through?</h4>
        <h5><em>May 16th, 2014</em></h5>
        <br/>
        <SpeakerList />
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
          <Meetup />
          <hr />
          <Meetup />
        </div>
      </div>
    );
  }
});


