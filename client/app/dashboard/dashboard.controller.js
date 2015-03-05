'use strict';

angular.module('baseballApp')
  .controller('DashboardCtrl', function ($scope, $http, socket) {

    $scope.teams = [];

    $http.get('/api/teams').success(function(teams) {
      $scope.teams = teams;
      socket.syncUpdates('team', $scope.teams);
    });

    $scope.addTeam = function() {
      if($scope.newTeamAge === '') {
        return;
      }
      $http.post('/api/teams/', {
        age: $scope.newTeamAge
      });
      $scope.newTeamAge = '';
    };

    $scope.deleteTeam = function(team) {
      $http.delete('/api/teams/' + team._id);
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('team');
    });

    $scope.events = [];

    $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });

  });
