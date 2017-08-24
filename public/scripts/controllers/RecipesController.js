(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipesController', function ($scope, $location, dataService) {


      // Get all receipes from the database
      dataService.getAllRecipes(
        function (response) {
          $scope.recipes = response.data;
        },
        function (error) {
          console.error(error);
        }
      );

      // Get all categories from the database
      dataService.getAllCategories(
        function (response) {
          $scope.categories = response.data
        },
        function (error) {
          console.error(error);
        }
      );

      $scope.isEmptyRecipeList = function () {
        // Maybe need other verifications but seems to work by now
        return $scope.recipes === 0;
      }

      $scope.addRecipe = function ($index) {
        console.log('The user wants to create a new recipe!!');
        $location.path('/add')
      };

      $scope.getRecipe = function ($index) {
        dataService.getRecipe($index);
      };

      $scope.deleteRecipe = function ($index) {
        dataService.deleteRecipe($index);
      };
  });
})();
