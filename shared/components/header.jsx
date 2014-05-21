/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;
var SpeakerList = require('./speaker').SpeakerList;
var moment = require('moment');

var Logistics = createClass({
  render: function() {
    return (
      <div className="col-md-6" id="logistics">
        <h4 className="heading">
          {"{ Logistics }"}
        </h4>

        <table>
          <tr>
            <td>Date:</td>
            <td>{moment(this.props.date).format('MMMM Do, YYYY')}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>4 Times Square (Entrance on 43rd, between 6th and Broadway)</td>
          </tr>
          <tr>
            <td>Schedule:</td>
            <td>
              <p><strong>6:30 - 7:00 PM</strong> Pizza + discussion 5th Floor, Self Conference Room</p>

              <p><strong>7:00 - 8:15 PM</strong> Talks + questions 4th Floor Auditorium</p>

              <p><strong>8:15 PM</strong> - Drinks at Heartland Brewery</p>
            </td>
          </tr>
          <tr><td></td><td></td></tr>
          <tr>
            <td></td>
            <td><a href="http://www.meetup.com/nychtml5/" className="btn btn-sm btn-danger">Sign Up!</a></td>
          </tr>
        </table>

        <div className="well well-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.284184248123!2d-73.9860064!3d40.755773899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854d5ec1c43%3A0x2ca611edf127154b!2sConde+Nast+Bldg!5e0!3m2!1sen!2sus!4v1400436810661" width="100%" height="260" frameBorder="0"></iframe>
        </div>
        <div className="alert alert-warning">
          NYC HTML5 expects all speakers and attendees to follow the <a href="http://jsconf.com/codeofconduct.html" className="alert-link">JSCONF</a> code of conduct.
        </div>
      </div>
    )
  }
});

module.exports = createClass({
  render: function () {
    return (
      <header className="masthead">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img className="brand" src="/images/logo.svg" alt="NYC HTML5"/>
            </div>
            <div className="col-md-10">
              <div className="pull-right sponsored">
                <small className="pull-right">Sponsored by:</small><br/>
                <img src="/images/cn-125.png" alt="conde nast" />
              </div>
              <div className="page-header">
                <h3 className="heading">{"{ Next Event }"}</h3>
                <h2>
                  <a href="/">{this.props.meetup.title}</a>
                </h2>
              </div>
            </div>
          </div>

          <hr/>

          <div className="row">
            <SpeakerList className="col-md-6" speakers={this.props.meetup.speakers}/>
            <Logistics date={this.props.meetup.date} />
          </div>
        </div>
      </header>
    );
  }
});
