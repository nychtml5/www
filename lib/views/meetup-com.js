'use strict';

var React = require('react');
var dom = React.DOM;

var footer = React.createClass({
  render: function() {
    return dom.div(
      null,
      dom.div(null, '6:30 - 7:00 PM Pizza + discussion 5th Floor, Self Conference Room'),
      dom.div(null, '7:00 - 8:15 PM Talks + questions 4th Floor Auditorium'),
      dom.div(null, '8:15 - Drinks at Heartland Brewery')
    );
  }
});

module.exports = React.createClass({
  render: function() {
    var speakers = this.props.speakers.map(function(s) {
      var url = s.twitter ? 'https://twitter.com/' + s.twitter : s.url;

      return dom.div(
        { key: s.name },
        dom.p(null, s.title + ' by ' + s.name + ' | ' + url),
        dom.p(null, s.desc)
      );
    });

    return dom.div(null, speakers, footer());
  }
});

