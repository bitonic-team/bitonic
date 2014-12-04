'use strict';

angular.module('bitonic')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.map', {
        url: 'map',
        templateUrl: 'map/map.html',
        controller: 'MapCtrl'
      });
  });