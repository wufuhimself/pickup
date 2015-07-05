angular.module("controllers").controller("SettingsController", function ($scope, $state, AuthService) {
   $scope.logout = function() {
       AuthService.logout();
       $state.go("login");
   }
});