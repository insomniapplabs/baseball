'use strict';

angular.module('baseballApp')
  .controller('EventsCtrl', function ($scope, $http, socket) {

    $scope.events = [];

    $http.get('/api/events').success(function(events) {
      $scope.events = events;
      socket.syncUpdates('event', $scope.events);
    });

    
  });
