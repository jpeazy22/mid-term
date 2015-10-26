angular.module("midApp",["ngRoute"])

angular.module("midApp")
	.config(["$routeProvider",function($routeProvider){

	$routeProvider
	.when("/",{
		templateUrl : "/html/home.html",
		controller  : "mainController"
	})
	.when("/tournaments", {
		templateUrl : "/html/tournaments.html",
		controller  : "mainController"
	})
	.when("/matchup", {
		templateUrl : "/html/matchup.html",
		controller  : "mainController"
	})
	.when("/playerprofiles", {
		templateUrl : "/html/playerprofiles.html",
		controller  : "mainController"
	})
	.when("/watchlist", {
		templateUrl : "/html/watchlist.html",
		controller  : "mainController"
	})
	.otherwise({
		redirectTo : '/error'
	})

}])

angular.module('midApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){
		$scope.greeting = "Welcome Ballers";
		$scope.playerList = gameFactory.playerList;
		$scope.playerList = gameFactory.playerList;
		$scope.teamsList = gameFactory.teamsList;
		$scope.tournamentsList = gameFactory.tournamentsList;
		console.log($scope.tournamentsList)

	$scope.tournaments = function(){
		for(var i = 0; i <= tournamentsList.length; i++){
			console.log('Tournament Name: ' + this.tournamentName + '\nDate: ' + this.tournamentDate + '\nLocation: ' + this.locationAddress + '\nContact Info: ' + this.contactInfo);
		}
	}

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


}]);