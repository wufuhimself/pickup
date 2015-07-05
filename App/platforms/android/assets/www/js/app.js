angular.module("controllers", []);
angular.module("services", []);
angular.module("pickup", [
    "controllers", "services",
    "ionic", "firebase", "uiGmapgoogle-maps"
]).run(function ($ionicPlatform, $state) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) { cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true); }
        if (window.StatusBar) { StatusBar.styleLightContent(); }

        $state.transitionTo("login");
    });
}).config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        v: "3.17",
        libraries: "weather,geometry,visualization"
    });

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "LoginController"
        })
        .state("tabs", {
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        .state("tabs.pickup", {
            url: "/pickup",
            authenticate: true,
            views: {
                pickup: {
                    templateUrl: "templates/pickup.html",
                    controller: "PickupController"
                }
            }
        })
        .state("tabs.settings", {
            url: "/settings",
            views: {
                settings: {
                    templateUrl: "templates/settings.html",
                    controller: "SettingsController"
                }
            }
        });

    $urlRouterProvider.otherwise("/pickup");
});