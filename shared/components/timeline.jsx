/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;
var SpeakerList = require('./speaker.jsx').SpeakerList;
var moment = require('moment');

//<div>
//  <h4><a href={m.url}>{m.title}</a></h4>
//  <h5>{moment(m.date).format('MMMM Do, YYYY')}</h5>
//  <SpeakerList speakers={m.speakers} />
//  <hr/>
//</div>

var Meetup = exports.Meetup = createClass({
  render: function () {
    var m = this.props.meetup;
    var cls = this.props.idx % 2 !== 0 ? 'timeline-inverted' : '';

    return (
      <li className={cls}>
        <div className='timeline-badge'><i className='glyphicon glyphicon-calendar'></i></div>
        <div className='timeline-panel'>
          <div className='timeline-heading'>
            <h4 className='timeline-title'><a href={m.url}>{m.title}</a></h4>
            <p className='timeline-date'>
              <i className='glyphicon glyphicon-time'/> {moment(m.date).format('MMM Do, YYYY')}
            </p>
          </div>
          <div className='timeline-body'>
            <SpeakerList speakers={m.speakers} />
          </div>
        </div>
      </li>
    );
  }
});


exports.Timeline = createClass({
  render: function () {
    return (
      <ul className='timeline'>
        <li><h3 className='timeline-header'>Previous Events</h3></li>
        {this.props.meetups.map(function(m, i) {
          return <Meetup key={m.date} idx={i} meetup={m} />
        })}
      </ul>
    );
  }
});


