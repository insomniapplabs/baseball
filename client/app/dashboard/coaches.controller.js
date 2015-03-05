'use strict';

angular.module('baseballApp')
	.controller('CoachesCtrl', function($scope, $http, socket) {

		$scope.coaches = [];

		$http.get('/api/coaches').success(function(coaches) {
			$scope.coaches = coaches;
			socket.syncUpdates('coach', $scope.coaches)
		});

		$scope.addCoach = function() {
			$http.post('/api/coaches', {
				firstName: $scope.newCoachFirstName,
				lastName: $scope.newCoachLastName,
				type: $scope.newCoachType,
				teamAge: $scope.newCoachTeam
			});
			$scope.newCoachFirstName = '';
			$scope.newCoachLastName = '';
			$scope.newCoachType = '';
			$scope.newCoachTeam = '';
		};

		$scope.deleteCoach = function(coach) {
			$http.delete('/api/coaches/' + coach._id);
		};

		$scope.$on('$destroy', function() {
			socket.unsyncUpdates('coach');
		});

		$scope.resetForm = function() {
			$scope.newCoachFirstName = '';
			$scope.newCoachLastName = '';
			$scope.newCoachType = '';
			$scope.newCoachTeam = '';
		};	



	});