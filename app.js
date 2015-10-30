// Requires \\
var express = require("express");
var bodyParser = require("body-parser");
var apiKeys = require("./apiKeys.json");
var httpApi = require("request");
var User = require("./models/user.js");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rosterApp')
// Create Express App Object \\
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

// Auth Requires
var session = require('express-session');
var passport = require('passport');

var passportConfig = require('./config/passport'); // Load in our passport configuration that decides how passport actually runs and authenticates

// Create Express App Object \\
var app = express();

// Session Setup
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes \\
var authenticationController = require('./controllers/authentication');

// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);

// This route is designed to send back the logged in user (or undefined if they are NOT logged in)
app.get('/api/me', function(req, res){
	res.send(req.user)
})

// ***** IMPORTANT ***** //
// By including this middleware (defined in our config/passport.js module.exports),
// We can prevent unauthorized access to any route handler defined after this call
// to .use()
app.use(passportConfig.ensureAuthenticated);

app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});
// app.get('/superSensitiveDataRoute')



// Routes \\
app.get("/",function(request,response){
	console.log('can you see me?')
	response.sendFile("index.html",{root:"./public"})
});

app.get("/api/getTournamentSchedule", function(request, response){
	// console.log('we are about to send an API call')
	httpApi('http://api.sportradar.us/ncaawb-t3/tournaments/2015/REG/schedule.json?api_key=' + apiKeys.sportRadar, function (error, apiResponse, body) {
		  	if (!error && response.statusCode == 200) {
		    console.log('we got a response from the API call', body);
			response.send(body)
		 }
		 // http://api.sportradar.us/ncaawb-t3/games/2015/REG/schedule.xml?api_key=aaugwwmj9jxkfqr5w5ny7hks
	})
});

app.get("/api/leagueHierarchy", function(request, response){
	httpApi('http://api.sportradar.us/ncaawb-t3/league/hierarchy.json?api_key=' + apiKeys.sportRadar, function (error, apiResponse, body) {
		  	if (!error && response.statusCode == 200) {
		    console.log('pulling league hierarchy', body) // Show the HTML for the Schedule Info
			response.send(body)
		 }
	})
});

app.get("/api/callPlayers/:team_id", function(request, response){
	httpApi('http://api.sportradar.us/ncaawb-t3/teams/' + request.params.team_id + '/profile.json?api_key=' + apiKeys.sportRadar, function (error, apiResponse, body) {
		  	if (!error && response.statusCode == 200) {
		    console.log('pulling player profile info!!', body) // Show the HTML for the Schedule Info
			response.send(body)
		 }
	})
});

app.post("/api/favorites", function(request, response){
	console.log(request.body)
	User.update({email: request.user.email}, {$push: {"favorites": request.body}}, function(error, doc){
		console.log(error, 'error')
		console.log(doc, 'doc')
	})
	response.send('user favories')
})

app.use(function(request,response){
	response.send("This file does not exist.")
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port,function(){
	console.log("I'm hearing you on port " + port + "...")
})