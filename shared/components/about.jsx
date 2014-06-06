/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;

module.exports = createClass({
  render: function () {
    return (
      <div className='row' id='sidebar'>
        <div className='col-md-4'>
          <h5>NYC HTML5 is a user group focused on JavaScript technologies.</h5>
          <a role='button' className='btn btn-danger' href='http://www.meetup.com/nychtml5/'>
            Join Today!
          </a>
        </div>
      </div>
    );
  }
});
