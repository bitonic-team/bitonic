'use strict';

angular.module('bitonic')
  .controller('MapCtrl', function ($scope, $http) {

    $scope.map;
    $scope.stores = [];
    $scope.$on('mapInitialized', function(event, evtMap) {
      map = evtMap;
      $scope.map = map;
      console.log('loading scripts/starbucks.json');
      $http.get('https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/scripts/starbucks.json').success( function(stores) {
        for (var i=0; i<stores.length; i++) {
          var store = stores[i];
          store.position = new google.maps.LatLng(store.latitude,store.longitude);
          store.title = store.name;

          var marker = new google.maps.Marker(store);

          google.maps.event.addListener(map, 'click', function() {
            $scope.storeInfo.hide();
          });

          $scope.stores.push(marker); 
        }
        console.log('finished loading scripts/starbucks.json', '$scope.stores', $scope.stores.length);
        $scope.markerClusterer = new MarkerClusterer(map, $scope.stores, {});
        $scope.fullScreenToggle.click();
      });
    });
  });