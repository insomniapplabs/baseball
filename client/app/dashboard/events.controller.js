'use strict';

angular.module('baseballApp')
  .controller('EventsController', function ($scope, $http, socket) {

    $scope.events = [];

    $http.get('/api/events').success(function(events) {
      $scope.events = events;
      socket.syncUpdates('event', $scope.events);
    });

    $scope.resetEventForm = function() {
    	$scope.newEventTitle = '';
    	$scope.newEventDescription = '';
    	$scope.newEventLocation = '';
    	$scope.newEventStart = '';
    	$scope.newEventEnd = '';
    	$scope.newEventUrl = '';
    	$scope.newEventTeam = '';
    	$scope.newEventType = '';
    	$scope.newEventNote = '';
    };

    $scope.addEvent = function() {
    	$http.post('/api/events', {
		  title: $scope.newEventTitle,
		  description: $scope.newEventDescription,
		  location: $scope.newEventLocation,
		  start: $scope.newEventStart,
		  end: $scope.newEventEnd,
		  url: $scope.newEventUrl,
		  team: $scope.newEventTeam,
		  type: $scope.newEventType,
		  notes: $scope.newEventNote,
		  time: $scope.newEventTime,
          className: 'Skeeter' + $scope.newEventTeam   		
    	});
    	$scope.newEventTitle = '';
    	$scope.newEventDescription = '';
    	$scope.newEventLocation = '';
    	$scope.newEventStart = '';
    	$scope.newEventEnd = '';
    	$scope.newEventUrl = '';
    	$scope.newEventTeam = '';
    	$scope.newEventType = '';
    	$scope.newEventNote = '';
    	$scope.newEventTime = '';
    };

    $scope.deleteEvent = function(event) {
    	$http.delete('/api/events/' + event._id);
    };


    
  });
