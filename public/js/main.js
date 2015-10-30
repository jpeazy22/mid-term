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

		$scope.showPlayers = function(teamId, team){
			console.log(teamId)
			$http.get('/api/callPlayers/' + teamId)
			.then(function(returnData){
				console.log('teamId', returnData)
				team.players = returnData.data.players
				team.coaches = returnData.data.coaches

			})
		};

		// $scope.showTeammates = function(){
		// 	console.log('where are the players')
		// 	$http.get()
		// }
}]);





