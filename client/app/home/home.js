'use strict';

angular.module('baseballApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
