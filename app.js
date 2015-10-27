// Requires \\
var express = require("express");
var bodyParser = require("body-parser");
var apiKeys = require("./apiKeys.json");
var httpApi = require("request");


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
	console.log('we are about to send an API call')
	httpApi('http://api.sportradar.us/ncaawb-t3/games/2015/REG/schedule.json?api_key=' + apiKeys.sportRadar, function (error, apiResponse, body) {
		  	if (!error && response.statusCode == 200) {
		    console.log('we got a response from the API call')
			response.send(body)
		 }
	})
})

app.get("/callPlayers", function(request, response){
	httpApi('http://api.sportradar.us/ncaawb-t3/teams/6e0c5edc-4a6d-416b-9e10-7cccf13e971f/profile.xml?api_key=' + apiKeys.sportRadar, function (error, apiResponse, body) {
		  	if (!error && response.statusCode == 200) {
		    console.log(body) // Show the HTML for the Schedule Info
			response.send(body)
		 }
	})
})




app.use(function(request,response){
	response.send("This file does not exist.")
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port,function(){
	console.log("I'm hearing you on port " + port + "...")
})