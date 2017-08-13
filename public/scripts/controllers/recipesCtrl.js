'use strict';

angular
  .module('app')
  .controller('recipesCtrl', function ($scope, dataService) {


    $scope.getAllRecipes = dataService.getAllRecipes();

});
