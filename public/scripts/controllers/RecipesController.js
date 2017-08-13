'use strict';

angular
  .module('app')
  .controller('RecipesController', function ($scope, DataService) {


    // Get all receipes from the Database or display error message
    DataService.getAllRecipes(
      function (response) {
        $scope.recipes = response.data;
      },
      function (error) {
        console.error(error);
      }
    );


    $scope.getRecipe = function ($index) {
      DataService.getRecipe($index);
    }
});
