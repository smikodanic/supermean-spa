/**
 * ************** /server/app/index.js
 * Main application file which runs /server/views/clientApp.ejs
 */

var config = require('./config');
var express = require('express');
var app = express();
var path = require('path');


//***** VIEW ENGINE *****
//***********************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//***** MIDDLEWARES *****
//***********************
require('./middlewares/logger_morgan.js')(app, config); //must be first to log each request (also static files)
require('./middlewares/debug.js')(app, config);
require('./middlewares/errors.js')(app, config);
require('./middlewares/favicon.js')(app);


//=-=-= virtual host
// require('./middlewares/virtual_host.js')(app, config);

//=-=-= static file middlewares --- path.join() creates absolute path from root
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/bower', express.static(path.join(__dirname, '/../../bower_components')));
app.use('/client', express.static(path.join(__dirname, '/../../client')));



//****** CLIENT SIDE ROUTES *****
// When URL is typed in browser superMEAN serves /views/clientApp.ejs.
//*******************************

app.use(function (req, res) {
    'use strict';
    if (req.url.indexOf('/bower') === -1 && req.url.indexOf('/assets') === -1) {
        res.render('clientApp');
    }
});


module.exports = app;
