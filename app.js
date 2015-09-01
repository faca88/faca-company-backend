var express = require('express');
var connect = require('connect');
var app   = express();

//Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

//Routes
require('./routes/routes.js')(app);

module.exports = app;
