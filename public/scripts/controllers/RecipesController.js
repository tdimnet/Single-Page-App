(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipesController', function ($scope, dataService) {

      // Get all recipes from the database in order to display them
      dataService.getAllRecipes(
        // If correct
        function (response) {
          $scope.recipes = response.data;
        },
        // If not, for now, show error within the console
        function (error) {
          console.log(error);
        }
      );

      // When the user wants to add a new recipe
      $scope.addRecipe = function () {
        console.log('The user wants to create a new recipe');
      };

    });
})();
