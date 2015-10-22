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
	
	var Lesky	 = new Player('Lesky', 'Seth', 42, 'F', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Stenquist = new Player('Stenquist', 'Maria', 42, 'F', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Cripe 	 = new Player('Cripe', 'Richelle', 42, 'F', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Doe 	 = new Player('Doe', 'Janie', 42, 'F', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Walker 	 = new Player('Walker', 'Johnny', 42, 'F', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Hirsch 	 = new Player('Hirsch', 'Michael', 42, 'C', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Khoukaz  = new Player('Khoukaz', 'Edouard', 42, 'C', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Moody  	 = new Player('Moody', 'Steven', 42, 'C', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Williams = new Player('Williams', 'Melissa', 42, 'C', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Arnold 	 = new Player('Arnold', 'Mary', 42, 'C', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Tucker 	 = new Player('Tucker', 'Tucker', 42, 'PF', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Leasure  = new Player('Leasure', 'Brent', 42, 'PF', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Eagan 	 = new Player('Eagan', 'Jessey', 42, 'PF', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Wilson 	 = new Player('Wilson', 'Cat', 42, 'PF', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Johnson  = new Player('Johnson', 'Amy', 42, 'PF', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Revere 	 = new Player('Revere', 'Dave', 42, 'SG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Lopez 	 = new Player('Lopez', 'Hansel', 42, 'SG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Arnold 	 = new Player('Arnold', 'Mary', 42, 'SG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Jones 	 = new Player('Jones', 'Jessica', 42, 'SG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Doe 	 = new Player('Doe', 'Janie', 42, 'SG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Ford 	 = new Player('Ford', 'Danielle', 42, 'PG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Origlio  = new Player('Origlio', 'Paula', 42, 'PG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Johnson  = new Player('Johnson', 'Amy', 42, 'PG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Pearson  = new Player('Pearson', 'Missy', 42, 'PG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')
	var Pearson  = new Player('Pearson', 'Missy', 42, 'PG', '6-1', 'Sr.', 33, 49.3, 20, 73.3, 9.5, 2, 'http://folkhalsocentrum.se/wp-content/themes/Folkhalsocentrum/img/person-placeholder.png')


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
	var RefactorU = new Teams( 'refactorU Brackets', 'Boulder, CO', [Williams, Arnold, Jones], 'http://lorempixel.com/100/100/sports/')
	var EWU = new Teams('Eastern Eagles', 'Cheney, WA', [Williams, Arnold, Jones],'http://lorempixel.com/100/100/sports/')
	var Jessey = new Teams( 'Jessey Sloths', 'Lakewood, CO', [Williams, Arnold, Jones],'http://lorempixel.com/100/100/sports/')
	var Hansel = new Teams( 'Hansel Tigers', 'Colorado Springs, CO', [Williams, Arnold, Jones],'http://lorempixel.com/100/100/sports/')


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
	
	new Tournaments('May Tournament', 'May 12-15th, 2016', 'Seattle, WA', 'Let it rain | letIt@rain.com | 234-234-2345', [RefactorU, EWU, Jessey, Hansel])
	new Tournaments('June Tournament', 'June 9-12th, 2016', 'Portland, OR', 'Don Johnson | don@Johnson.com | 333-333-3333', [RefactorU, EWU, Jessey, Hansel])
	new Tournaments('July Tournament', 'July 1-4th, 2016', 'Dallas, TX', 'Dallas Buyers Club | dallasBuyers@club.com | 333-444-5555', [RefactorU, EWU, Jessey, Hansel])
	new Tournaments('Hot Summer Tournament','July 19-22nd, 2016', 'San Diego, CA', 'Cali Girl| cali@girl.com | 888-999-4455', [RefactorU, EWU, Jessey, Hansel])
	new Tournaments('High as a Kite', 'August 5-8th, 2016','Boulder, CO', 'High Kite | high@kite.com | 420-420-4420', [RefactorU, EWU, Jessey, Hansel])
	new Tournaments("Roll 'em", 'September 12-15th, 2016', 'Las Vegas, NV', "I'm in debt | imIn@debt.com | 777-777-7777", [RefactorU, EWU, Jessey, Hansel])


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









