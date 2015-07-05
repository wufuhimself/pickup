angular.module("controllers").controller("PickupController", function ($scope, LocationService) {
    LocationService.getLocation().then(function (position) {
        $scope.map = {
            center: position.coords,
            zoom: 12
        };

        $scope.userLocation = position.coords;
    });
});