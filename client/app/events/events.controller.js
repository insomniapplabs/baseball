'use strict';

angular.module('baseballApp')
  .controller('EventsCtrl', function ($scope, $http) {

  		var date = new Date();
    	var d = date.getDate();
    	var m = date.getMonth();
    	var y = date.getFullYear();

     $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];

    $http.get('api/events').success(function(events) {
      $scope.events = events;
    });

    $scope.teams = [];

    $http.get('api/teams').success(function(teams) {
    	$scope.teams = teams;
    });

    $scope.eventSource = {url: '/api/events'};

    $scope.eventSources = [$scope.events, $scope.eventSource];

    $scope.radioModel = 'Calendar';
    

  });
