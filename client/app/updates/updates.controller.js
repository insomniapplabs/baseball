'use strict';

angular.module('baseballApp')
  .controller('UpdatesCtrl', function ($scope, $http) {
    
  	$scope.updates = [];

  	$http.get('/api/updates').success(function(updates) {
  		$scope.updates = updates;
  	});

  });
