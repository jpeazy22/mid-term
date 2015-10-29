var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define our Schema for the DB
var tournamentListSchema =  new Schema({
	name: String,
	location: String,
	start_date: String,
	end_date: String
});

var tournamentList = mongoose.model('tournamentList', tournamentListSchema);
// Being modelling the collection
module.exports = tournamentList;