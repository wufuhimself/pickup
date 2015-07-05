angular.module("services").factory("AuthService", function ($firebaseAuth, $state) {
    var firebase = new Firebase("https://pickup-app.firebaseio.com");
    var auth = $firebaseAuth(firebase);

    return {
        login: function () {
            return auth.$authWithOAuthPopup("facebook").catch(function (error) {
                console.error("Authentication failed:", error);
            });
        },

        logout: function () {
            auth.$unauth();
        }
    };
});