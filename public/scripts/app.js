angular.module("app", [])

.controller('MainCtrl', function($scope, dataService) {
  $scope.helloWorld = dataService.helloWorld;
});
