angular.module("app", [])

.controller('MainCtrl', function($scope, $http) {
  $http.get("/api/recipes").then(function(data) {
    console.log(data);
  })
});
