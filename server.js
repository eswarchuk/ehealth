// server.js

// get all the packages
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var http 	= require ('http'); 
var mongoose = require('mongoose');  
var passport = require('passport');
var flash    = require('connect-flash');
var configDB = require('./config/database.js');

// configuration ===============================================================
// connect to our database
mongoose.connect(configDB.url);
		 //{ useMongoClient: true, promiseLibrary: global.Promise });


require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms
	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'hopedieslast' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and import app and passport from routes.js

// launch ======================================================================
app.listen(port);
console.log('Ding Dong ' + port);
