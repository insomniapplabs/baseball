'use strict';

angular.module('baseballApp')
  .controller('RostersCtrl', function ($scope, $http, socket) {

    $scope.players = [];

    $http.get('/api/players').success(function(players) {
      $scope.players = players;
      socket.syncUpdates('player', $scope.players);
    });

    $scope.addPlayer = function() {
      if($scope.newPlayerFirstName === '' || $scope.newPlayerLastName === '' || $scope.newPlayerNumber === '' || $scope.newPlayerTeam === '') {
        return;
      }
      $http.post('/api/players', {
        firstName: $scope.newPlayerFirstName,
        lastName: $scope.newPlayerLastName,
        number: $scope.newPlayerNumber,
        teamAge: $scope.newPlayerTeam
      });
      $scope.newPlayerFirstName = '';
      $scope.newPlayerLastName = '';
      $scope.newPlayerNumber = '';
      $scope.newPlayerTeam = '';
    };

    $scope.deletePlayer = function(player) {
      $http.delete('/api/players/' + player._id);
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('player');
    });

    $scope.resetForm = function() {
      $scope.newPlayerFirstName = '';
      $scope.newPlayerLastName = '';
      $scope.newPlayerNumber = '';
      $scope.newPlayerTeam = '';
    };


  });
