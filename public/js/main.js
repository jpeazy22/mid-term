angular.module("midApp",["ngRoute"])

angular.module("midApp")
	.config(["$routeProvider",function($routeProvider){

	$routeProvider
	.when("/",{
		templateUrl : "/html/about.html",
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
		$scope.tournamentSchedule;
		$scope.callPlayer;
		$scope.teams;

		// console.log('we are about to send an httpGet')
		$http.get('/api/getTournamentSchedule')
		.then(function(returnData){
			$scope.tournamentSchedule = returnData.data.tournaments;
			// console.log(returnData.data.tournaments, 'returned tournaments')
		});

		$scope.leagueHierarchy = function(){
			$http.get('/api/leagueHierarchy')
			.then(function(returnData){
				$scope.teams = returnData.data.divisions;
				console.log('$scope.teams',$scope.teams)
				// console.log( 'league divisions', $scope.leagues.divisions)
				// console.log('scope division 0', $scope.leagues.divisions[0])
				// console.log('conferences', $scope.leagues.divisions.conferences.teams.name)
			})
		};
		

		$scope.callPlayers = function() {
			console.log('sending request for players')
			$http.get('/api/callPlayers')
			.then(function(returnData){
				console.log('about to display players:', returnData.data )
				$scope.callPlayer = returnData.data
			})
		};

		$scope.showPlayers = function(teamId){
			console.log(teamId)
			$http.get('/api/callPlayers/' + teamId)
			.then(function(returnData){
				console.log('teamId', returnData)
			})
		};



	// 	$scope.playerList = gameFactory.playerList;
	// 	$scope.playerList = gameFactory.playerList;
	// 	$scope.teamsList = gameFactory.teamsList;
	// 	$scope.tournamentsList = gameFactory.tournamentsList;
	// 	console.log($scope.tournamentsList)

	// $scope.tournaments = function(){
	// 	for(var i = 0; i <= tournamentsList.length; i++){
	// 		console.log('Tournament Name: ' + this.tournamentName + '\nDate: ' + this.tournamentDate + '\nLocation: ' + this.locationAddress + '\nContact Info: ' + this.contactInfo);
	// 	}
	// }

	// $scope.isChecked = function(index){
	// 	$scope.playerList[index].watched = ! $scope.playerList[index].watched 
	// 	if($scope.playerList[index].watched === true){
	// 		console.log($scope.playerList[index])
	// 	}
	// }
	// $scope.showAbout = true;
	// $scope.showTournamentList = false;
	// $scope.showPlayerProfiles = false;
	// $scope.navbar = function (one,two,three){
	// 	$scope.showAbout = one;
	// 	$scope.showTournamentList = two;
	// 	$scope.showPlayerProfiles = three;

	// }

	// $scope.showTeamList = function(currentTournament){ // using currentTournament targets the current tournament so showTeams only shows for that specific tournament
	// 	currentTournament.showTeams = !currentTournament.showTeams;		
	// }

	// $scope.showPlayersList = function(currentRoster){
	// 	currentRoster.players = !currentRoster.players;
	// }

	// $scope.showIndividualPlayer = function(currentPlayer){
	// 	currentPlayer.showPlayer = !currentPlayer.showPlayer;
	// 	console.log('hi')
	// }

	// $('#myModal').on('shown.bs.modal', function () {
 // 	// $('#myInput').focus()
	// })


}]);


// angular.module('midApp').controller('scheduleController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){


// 	$http.get('/api/schedules' +  ).then(function(returnData){
// 		$scope.schedule = returnData.data
// 	})

// }])






