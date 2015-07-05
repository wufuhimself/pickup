angular.module("services").factory("LocationService", function ($q) {
   return {
       getLocation: function() {
           var q = $q.defer();

           navigator.geolocation.getCurrentPosition(function (result) {
               q.resolve(result);
           }, function (err) {
               q.reject(err);
           });

           return q.promise;
       }
   }
});