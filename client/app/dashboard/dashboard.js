'use strict';

angular.module('baseballApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        authenticate: true
      })
      .state('dashboard.home', {
        url: '/home',
        templateUrl: 'app/dashboard/home.html',
        controller: 'DashboardCtrl',
        authenticate: true
      })
      .state('dashboard.rosters', {
        url: '/rosters',
        templateUrl: 'app/dashboard/rosters.html',
        controller: 'RostersCtrl',
        authenticate: true
      })
      .state('dashboard.updates', {
        url: '/updates',
        templateUrl: 'app/dashboard/updates.html',
        controller: 'UpdatesController',
        authenticate: true
      })
      .state('dashboard.newUpdate', {
        url: '/updates/new',
        templateUrl: 'app/dashboard/new-update.html',
        controller: 'UpdatesController',
        authenticate: true
      })
      .state('dashboard.coaches', {
        url: '/coaches',
        templateUrl: 'app/dashboard/coaches.html',
        controller: 'CoachesCtrl',
        authenticate: true
      })
      .state('dashboard.events', {
        url: '/events',
        templateUrl: 'app/dashboard/events.html',
        controller: 'EventsController',
        authenticate: true
      });
  });
