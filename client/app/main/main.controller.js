'use strict';

angular.module('baseballApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    
    $scope.events = [];

    var today = new Date();

   //$http.get('/api/events').success(function(events) {
   //    var currentEvents = [];
   //    //var today = Date.now;
   //    events.forEach(function(event) {
   //        if(event.start >= today) {
   //            currentEvents.push(event);
   //        }
   //    });
   //    return currentEvents;
   //    $scope.currentEvents = currentEvents;
   //});

    $http.get('/api/events').success(function(events) {
     $scope.events = events;
    });

    $scope.teams = [];
    $http.get('/api/teams').success(function(teams) {
      $scope.teams = teams;
    });

  




    //$scope.awesomeThings = [];
//
    //$http.get('/api/things').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //  socket.syncUpdates('thing', $scope.awesomeThings);
    //});
//
    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
//
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};
//
    //$scope.$on('$destroy', function () {
    //  socket.unsyncUpdates('thing');
    //});
  });
