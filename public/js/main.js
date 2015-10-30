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
	.when("/auth/login", {
		templateUrl : "/html/about.html",
		controller : "mainController"
	})
	.when("/auth/signup", {
		templateUrl : "/html/about.html",
		controller : "mainController"
	})
	.when("/auth/logout", {
		templateUrl : "/html/about.html",
		controller : "mainController"
	})
	.otherwise({
		redirectTo : '/error'
	})

}])

angular.module('midApp')
	.service('authService', ['$http', '$location', function($http){
		
		this.authCheck = function(cb){
			$http.get('/api/me')
				.then( function(returnData){
					cb(returnData.data)

				})
		}
					
						
	}])

angular.module('midApp')
	.controller('mainController', ['$scope', '$http', 'authService', function($scope, $http, authService){
		console.log('AUTH', authService)

		authService.authCheck(function(user){
			console.log('USER!', user)
			$scope.user = user
		})



		$scope.greeting = "Welcome Ballers";
		$scope.tournamentSchedule;
		$scope.callPlayer;
		$scope.teams;

		console.log('we are about to send an httpGet')
		$http.get('/api/getTournamentSchedule')
		.then(function(returnData){
			$scope.tournamentSchedule = returnData.data.tournaments;
			// console.log(returnData.data.tournaments, 'returned tournaments')
		});

		$scope.leagueHierarchy = function(){
			$http.get('/api/leagueHierarchy')
			.then(function(returnData){
				$scope.teams = returnData.data.divisions;
				// console.log('$scope.teams',$scope.teams)
				// console.log( 'league divisions', $scope.leagues.divisions)
			})
		};

		$scope.showPlayers = function(teamId, team){
			// console.log(teamId)
			$http.get('/api/callPlayers/' + teamId)
			.then(function(returnData){
				console.log('teamId', returnData)
				team.players = returnData.data.players
				team.coaches = returnData.data.coaches

			})
		};

		$scope.favoritePlayer = function(player){
			console.log('player:', player)
			$http.post('/api/favorites', player)

		};
}]);





