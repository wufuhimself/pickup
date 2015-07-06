angular.module("controllers").controller("PickupController", function ($scope, LocationService) {
    LocationService.getLocation().then(function (position) {
        $scope.map = {
            center:
            {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            },
            zoom: 12
        };

        $scope.userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
    });
});