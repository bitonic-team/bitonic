'use strict';

angular.module('bitonic', [
  'ngResource',
  'ui.router',
  'ngMap',
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });