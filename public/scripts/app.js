angular.module("app", [])

.controller('MainCtrl', function($scope, dataService) {
  $scope.getRecipesByCategory = dataService.getRecipesByCategory;
});
