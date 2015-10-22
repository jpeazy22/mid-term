angular.module("midApp", []);

angular.module('midApp')
	.factory('gameFactory', function(){

		var playerList = []

var Player = function(pastName, firstName, jerseyNumber, position, height, year, gamesPlayed, FG, threePointers, FT, rebounds, assists, profilePic){
	this.lastName = pastName;
	this.firstName = firstName;
	this.jerseyNumber = jerseyNumber;
	this.position = position;
	this.height = height;
	this.year = year;
	this.gamesPlayed = gamesPlayed;
	this.FG = FG;
	this.threePointers = threePointers;
	this.FT = FT;
	this.rebounds = rebounds;
	this.assists = assists;	
	this.profilePic = profilePic || 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png';
	this.showPlayer = false;
	this.watched = false;
	playerList.push(this)
	}
	// Player.prototype.stringify = function(){
	// 	console.log('Last Name: ' + this.lastName  + '\nFirst Name: ' + this.firstName  + '\nNo: ' + this.jerseyNumber  + '\nPosition: ' + this.position  + '\nHeight: ' + this.height  + '\nYear: ' + this.year  + '\nGP: ' + this.gamesPlayed  + '\nField Goals: ' + this.FG  + '\n3PT: ' + this.threePointers  + '\nFree Throw: ' + this.FT  + '\nRebounds: ' + this.rebounds  + '\nAssists: ' + this.assists);
	// }
	
	var Stenquist = new Player('Stenquist', 'Maria', 13, 'F', '5-10', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	// var Walker 	 = new Player('Walker', 'Johnny', 35, 'F', '5-5', 'Fr.', 20, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Khoukaz  = new Player('Khoukaz', 'Edouard', 55, 'C', '5-5', 'So.', 32, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	// var Moody  	 = new Player('Moody', 'Steven', 41, 'C', '5-9', 'So.', 35, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	// var Williams = new Player('Williams', 'Melissa', 34, 'C', '6-2', 'Sr.', 35, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Tucker 	 = new Player('Tucker', 'Tucker', 7, 'PF', '5-9', 'So.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Leasure  = new Player('Leasure', 'Brent', 6, 'PF', '6-2', 'Sr.', 30, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Eagan 	 = new Player('Eagan', 'Jessey', 12, 'PF', '5-10', 'Jr.', 20, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Wilson 	 = new Player('Wilson', 'Cat', 9, 'PF', '5-10', 'So.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Revere 	 = new Player('Revere', 'Dave', 23, 'SG', '5-9', 'Fr.', 19, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	//var Lopez 	 = new Player('Lopez', 'Hansel', 32, 'SG', '5-9', 'Jr.', 25, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholdJr.png')
	// var Jones 	 = new Player('Jones', 'Jessica', 11, 'SG', '5-10', 'So.', 25, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Origlio  = new Player('Origlio', 'Paula', 44, 'PG', '5-9', 'Sr.', 35, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	// var Pearson  = new Player('Pearson', 'Missy', 4, 'PG', '5-4', 'Jr.', 32, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')


var teamsList = []	
var Teams = function(teamName, teamLocation, teamPlayers, teamLogo){
	this.teamLogo = teamLogo || 'http://www.morrell-middleton.co.uk/wp-content/uploads/logo-placeholder.jpg';
	this.teamName = teamName;
	this.teamLocation = teamLocation;
	this.teamPlayers = teamPlayers;
	this.showTeams = false;
	teamsList.push(this)
	}
	Teams.prototype.stringify = function(){
		console.log('Team Name: ' + this.teamName + '\nLocation: ' + this.teamLocation);
	}
	var Lions = new Teams( 'Cowardly Lions', 'Boulder, CO', [1, 2, 3], 'http://lorempixel.com/100/100/sports/')
	var Tigers = new Teams('Timid Tigers', 'Longmont, WA', [Origlio, Stenquist, Khoukaz],'http://lorempixel.com/100/100/sports/')
	var Bears = new Teams( 'Jessey Bears', 'Lakewood, CO', [Tucker, Eagan, Leasure],'http://lorempixel.com/100/100/sports/')
	var Hansel = new Teams( 'Hansel Tigers', 'Colorado Springs, CO', [Tucker, Wilson, Revere],'http://lorempixel.com/100/100/sports/')
	var Dorthy = new Teams( 'Dorthy', 'Boulder, CO', [1, 2, 3], 'http://lorempixel.com/100/100/sports/')
	var Jumpers = new Teams('Jumpers', 'Longmont, WA', [Origlio, Stenquist, Khoukaz],'http://lorempixel.com/100/100/sports/')
	var TinMan = new Teams( 'Tin Men', 'Lakewood, CO', [Tucker, Eagan, Leasure],'http://lorempixel.com/100/100/sports/')
	var ScareCrow = new Teams( 'Scare Crows', 'Colorado Springs, CO', [Tucker, Wilson, Revere],'http://lorempixel.com/100/100/sports/')


var tournamentsList = []
var Tournaments = function(tournamentName, tournamentDate, locationAddress, contactInfo, tournamentTeams){
	this.tournamentName = tournamentName;
	this.tournamentDate = tournamentDate;
	this.locationAddress = locationAddress;
	this.contactInfo = contactInfo;	
	this.tournamentTeams = tournamentTeams;
	tournamentsList.push(this)
	}
	Tournaments.prototype.stringify = function(){
		console.log('Tournament Name: ' + this.tournamentName + '\nDate: ' + this.tournamentDate + '\nLocation: ' + this.locationAddress + '\nContact Info: ' + this.contactInfo);
	}	
	
	new Tournaments('May Tournament', 'May 12-15th, 2016', 'Seattle, WA', 'Let it rain | letIt@rain.com | 234-234-2345', [Lions, Tigers, Bears, Hansel])
	new Tournaments('June Tournament', 'June 9-12th, 2016', 'Portland, OR', 'Don Johnson | don@Johnson.com | 333-333-3333', [Dorthy, Jumpers, TinMan, ScareCrow])
	new Tournaments('July Tournament', 'July 1-4th, 2016', 'Dallas, TX', 'Dallas Buyers Club | dallasBuyers@club.com | 333-444-5555', [Lions, Tigers, Bears, Hansel])
	new Tournaments('Hot Summer Tournament','July 19-22nd, 2016', 'San Diego, CA', 'Cali Girl| cali@girl.com | 888-999-4455', [Lions, Tigers, Bears, Hansel])
	new Tournaments('High as a Kite', 'August 5-8th, 2016','Boulder, CO', 'High Kite | high@kite.com | 420-420-4420', [Lions, Tigers, Bears, Hansel])
	new Tournaments("Roll 'em", 'September 12-15th, 2016', 'Las Vegas, NV', "I'm in debt | imIn@debt.com | 777-777-7777", [Lions, Tigers, Bears, Hansel])


	return {
		playerList      : playerList,
		teamsList       : teamsList,
		tournamentsList : tournamentsList
	}

})


angular.module("midApp").controller('mainController', ['$scope','gameFactory', function($scope,gameFactory){
	$scope.hello = 'Hello';
	$scope.playerList = gameFactory.playerList;
	$scope.teamsList = gameFactory.teamsList;
	$scope.tournamentsList = gameFactory.tournamentsList;
	console.log($scope.tournamentsList)

	// $scope.tournaments = function(){
	// 	for(var i = 0; i <= tournamentsList.length; i++){
	// 		console.log('Tournament Name: ' + this.tournamentName + '\nDate: ' + this.tournamentDate + '\nLocation: ' + this.locationAddress + '\nContact Info: ' + this.contactInfo);
	// 	}
	// }

	$scope.isChecked = function(index){
		$scope.playerList[index].watched = ! $scope.playerList[index].watched 
		if($scope.playerList[index].watched === true){
			console.log($scope.playerList[index])
		}
	}
	$scope.showAbout = true;
	$scope.showTournamentList = false;
	$scope.showPlayerProfiles = false;
	$scope.navbar = function (one,two,three){
		$scope.showAbout = one;
		$scope.showTournamentList = two;
		$scope.showPlayerProfiles = three;

	}

	$scope.showTeamList = function(currentTournament){ // using currentTournament targets the current tournament so showTeams only shows for that specific tournament
		currentTournament.showTeams = !currentTournament.showTeams;		
	}

	$scope.showPlayersList = function(currentRoster){
		currentRoster.players = !currentRoster.players;
	}

	$scope.showIndividualPlayer = function(currentPlayer){
		currentPlayer.showPlayer = !currentPlayer.showPlayer;
		console.log('hi')
	}

	$('#myModal').on('shown.bs.modal', function () {
 	// $('#myInput').focus()
	})



}])









