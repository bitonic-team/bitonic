'use strict';

angular.module('bitonic')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      });
  });