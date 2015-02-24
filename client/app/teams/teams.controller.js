'use strict';

angular.module('baseballApp')
  .controller('TeamsCtrl', function ($scope, $http) {
    $scope.teams = [];

    $http.get('api/teams').success(function(teams) {
    	$scope.teams = teams;
    });

    $scope.players = [];

    $http.get('api/players').success(function(players) {
    	$scope.players = players;
    });

    
  });
