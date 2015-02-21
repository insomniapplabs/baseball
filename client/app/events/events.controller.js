'use strict';

angular.module('baseballApp')
  .controller('EventsCtrl', function ($scope, $http) {

    $scope.events = [];

    $http.get('api/events').success(function(events) {
      $scope.events = events;
    });

    $scope.eventSource = {url: '/api/events'};

    $scope.eventSources = [$scope.events, $scope.eventSource];



  });
