angular.module("controllers").controller("LoginController", function ($scope, $state, AuthService) {
    $scope.auth = AuthService;

    $scope.login = function() {
        AuthService.login().then(function() {
            $state.go("tabs.pickup");
        });
    }
});