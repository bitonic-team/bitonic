'use strict';

angular.module('bitonic', [
  'ngResource',
  'ui.router',
  'ngMap',
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/map');

    $locationProvider.html5Mode(true);
  });