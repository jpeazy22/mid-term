// Requires \\
var express = require("express");
var bodyParser = require("body-parser");
var apiKeys = require("./apiKeys.json");
var httpApi = require("request");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rosterApp')
// Create Express App Object \\
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


// Routes \\


app.get("/",function(request,response){
	console.log('can you see me?')
	response.sendFile("index.html",{root:"./public"})
});

app.get("/api/getTournamentSchedule", function(request, response){
	// console.log('we are about to send an API call')
	httpApi('http://api.sportradar.us/ncaawb-t3/tournaments/2014/REG/schedule.json?api_key=' + apiKeys.sportRadar, function (error, apiResponse, body) {
		  	if (!error && response.statusCode == 200) {
		    console.log('we got a response from the API call', body);
			response.send(body)
		 }
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




app.use(function(request,response){
	response.send("This file does not exist.")
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port,function(){
	console.log("I'm hearing you on port " + port + "...")
})