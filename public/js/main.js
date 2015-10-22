angular.module('midApp', [])

angular.module('midApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){

		$scope.greeting = "Welcome Ballers"
		$scope.playerList = gameFactory.playerList;

	}]);