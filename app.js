var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./app-server/routes/index');
var app = express();

//View engine setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true})); 
app.use(express.static(path.join(__dirname,'public')));
app.use(session( {secret:"String for encrypting cookies."} ));
app.use('/', index);

module.exports = app;
app.listen(3000);