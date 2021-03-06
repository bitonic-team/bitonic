'use strict';

angular.module('bitonic')
  .controller('MapCtrl', function ($scope, $http) {
    $scope.showModal = false;
    $scope.donateForm = false;
    $scope.marker = {};
    $scope.map=null;
    $scope.places = [];
    $scope.$on('mapInitialized', function(event, map) {
      $scope.map = map;
      $http.get('/api/places').success( function(places) {

        for (var i=0; i<places.length; i++) {
            var place = places[i];

            place.position = new google.maps.LatLng(place.lat,place.lng);
            place.title = place.name;

            var marker = new google.maps.Marker({
                position: place.position,
                title: place.title
            });
            marker.place = place;

            google.maps.event.addListener(marker, 'click', function(){
                $scope.showModal = true;
                $scope.donateForm = false;

                $http.get('/api/places/'+this.place._id).success( function(marker) {
                    $scope.marker = marker;
                });
            });

            // To add the marker to the map, call setMap();
            marker.setMap(map);
        }
      });
    });

    $scope.showDonateForm = function() {
        $scope.donateForm = true;
    };

    $scope.submitForm = function(donator, placeid) {
        $http.post('/api/donate', {amount: donator.amount, name: donator.name, placeId:placeid}).then(function(res) {
            if(res.data == "ok"){
                alert('Votre don a bien été prit en compte');
            }
        });
    };

    $scope.backToDetail = function() {
        $scope.donateForm = false;
    };
  });
