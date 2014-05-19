'use strict';

var http = require('http');
var app = require('./lib');

http.globalAgent.maxSockets = Infinity;

var port = process.env.PORT || 3000;
http.createServer(app).listen(port, function() {
  console.log('Server started on port %d', port);
});
