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
	// .when("/login", {
	// 	templateUrl : "/html/login.html",
	// 	controller  : "mainController"
	// })
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
		// console.log('AUTH', authService)

		authService.authCheck(function(user){
			// console.log('USER!', user)
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
				// for(var division = 0; division < $scope.teams.length; division++){
					// for(var conference = 0; conference < $scope.teams[division].conferences.length; conference++){
					// 	for(var team = 0; team < $scope.teams[division].conferences[conference].teams.length; team++){
					// 		console.log('testing', $scope.teams[division].conferences[conference].teams[team])
					// 		if($scope.teams[division].conferences[conference].teams[team].players){
					// 			for(var player = 0; player < $scope.teams[division].conferences[conference].teams[team].players.length; player++){
					// 				console.log('players', $scope.teams[division].conferences[conference].teams[team].players[player])
					// 			}
					// 		}
					// 	}
					// }
				// }
				console.log('$scope.teams',$scope.teams)
				// console.log( 'league divisions', $scope.leagues.divisions)
			})
		};

		$scope.showPlayers = function(teamId, team){
			console.log(teamId)
			$http.get('/api/callPlayers/' + teamId)
			.then(function(returnData){
				console.log('teamId', returnData)
				for(var i = 0; i < returnData.data.players.length; i++){
					returnData.data.players[i].teamId = teamId;
					returnData.data.players[i].teamName = returnData.data.name;
				}
				team.players = returnData.data.players
				team.coaches = returnData.data.coaches
				console.log(team.players)
			})
		};

		$scope.favoritePlayer = function(player){
			console.log('=================================player:', player)
			$http.post('/api/favorites', player)
			alert('Added to Favorties!')

		};

		$scope.removePlayer = function(playerId){
			console.log('clicking to remove player')
			console.log('player', playerId)
			$http.post('/api/removeFavorite', {playerId:playerId})
				.then(function(returnData){
					$scope.user = returnData.data
				})
		}

		$scope.saveNotes = function(){
			$http.post('/api/notes', $scope.user)
				.then(function(){
					alert('Notes Saved!')
				})
		}

		$scope.searchConferenceFilter = function(conference){
			// console.log('conference', conference)
			if(conference.name.search($scope.searchBar) === -1){
				return false;
			} else {
				return true;
			}
		}




}]);





