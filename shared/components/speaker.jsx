/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;

var Speaker = exports.Speaker = createClass({
  render: function() {
    return (
      <div className="media">
        <a className="pull-left" href="#">
          <img className="media-object" src="/images/doge.png" alt="..."/>
        </a>
        <div className="media-body">
          <h4 className="media-heading">Exploring Chrome DevTools less used potential Kirill Cherkashin</h4>
          Often DevTools is used just for basic JavaScript debugging, but there is much more behind it than what is commonly used. In this talk we will go through an overview of some Chrome DevTools features, such as workspaces, snippets, shortcuts, extensions and several others. The goal is to showcase the less known and less used sides of Chrome DevTools so that we can make best use of what it can offer.
        </div>
      </div>
    );
  }
});

exports.SpeakerList = createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        <Speaker />
        <Speaker />
        <Speaker />
      </div>
    );
  }
});
