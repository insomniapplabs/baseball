'use strict';

angular.module('baseballApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teams', {
        url: '/teams',
        templateUrl: 'app/teams/teams.html',
        controller: 'TeamsCtrl'
      });
  });