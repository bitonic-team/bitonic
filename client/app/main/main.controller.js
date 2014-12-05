'use strict';

angular.module('bitonic')
  .controller('MainCtrl', function ($scope, $state) {
        $scope.showModal = true;
        $state.go('main.map');
  });