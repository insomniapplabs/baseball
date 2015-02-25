'use strict';

angular.module('baseballApp')
  .controller('EventsCtrl', function ($scope, $http) {

  	$scope.events = [];

    $http.get('api/events').success(function(events) {
      $scope.events = events;
    });

    $scope.teams = [];

    $http.get('api/teams').success(function(teams) {
    	$scope.teams = teams;
    });

    $scope.eventSource = {url: '/api/events'};

    $scope.eventSources = [$scope.eventSource];

    $scope.radioModel = 'Calendar';
    

  });
