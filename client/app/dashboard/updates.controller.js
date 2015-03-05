'use strict';

angular.module('baseballApp')
  .controller('UpdatesController', function ($scope, $http, $location, socket) {
    
    $scope.updates = [];

    $http.get('/api/updates').success(function(updates) {
    	$scope.updates = updates;
    	socket.syncUpdates('update', $scope.updates);
    	$scope.selectedUpdate = $scope.updates[0];
    })

    $scope.teams = [];

    $http.get('/api/teams').success(function(teams) {
        $scope.teams = teams;
    });

    $scope.addUpdate = function() {
    	$http.post('/api/updates', {
    		title: $scope.newUpdateTitle,
    		date: $scope.newUpdateDate,
    		team: $scope.newUpdateTeam,
    		author: $scope.newUpdateAuthor,
    		text: $scope.newUpdateText,
    		draft: false
    	});
    	$location.path("/dashboard/updates");
    };

    $scope.addDraft = function() {
    	$http.post('/api/updates', {
    		title: $scope.newUpdateTitle,
    		date: $scope.newUpdateDate,
    		team: $scope.newUpdateTeam,
    		author: $scope.newUpdateAuthor,
    		text: $scope.newUpdateText,
    		draft: true
    	});
    	$location.path("/dashboard/updates");
    };

    $scope.deleteUpdate = function(update) {
    	$http.delete('/api/updates/' + update._id);
        $http.get('/api/updates').success(function(updates) {
            $scope.updates = updates;
            $scope.selectedUpdate = $scope.updates[0];
        })
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('update');
    });


    $scope.makeSelected = function(update) {
    	$scope.selectedUpdate = update;
    };



  });
