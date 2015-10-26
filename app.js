// Requires \\
var express = require("express");
var bodyParser = require("body-parser");


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

app.use(function(request,response){
	response.send("This file does not exist.")
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port,function(){
	console.log("I'm hearing you on port " + port + "...")
})