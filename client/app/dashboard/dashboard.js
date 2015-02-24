'use strict';

angular.module('baseballApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('dashboard.home', {
        url: '/home',
        templateUrl: 'app/dashboard/home.html',
        controller: 'DashboardCtrl'
      })
      .state('dashboard.rosters', {
        url: '/rosters',
        templateUrl: 'app/dashboard/rosters.html',
        controller: 'RostersCtrl'
      })
      .state('dashboard.updates', {
        url: '/updates',
        templateUrl: 'app/dashboard/updates.html',
        controller: 'UpdatesCtrl'
      })
      .state('dashboard.events', {
        url: '/events',
        templateUrl: 'app/dashboard/events.html',
        controller: 'EventsController'
      });
  });
