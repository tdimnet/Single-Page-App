(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDetailController', function ($scope, $location, dataService) {


      // Get all categories from the database
      dataService.getAllCategories(
        function (response) {
          $scope.categories = response.data;
        },
        function (error) {
          console.error(error);
        }
      );

      // Get all food items from the database
      dataService.getAllFoodItems(
        function (response) {
          $scope.foodItems = response.data;
        },
        function (error) {
          console.log(error);
        }
      );


      // Add new ingredient item on click event
      $scope.addNewIngredient = function () {
        console.log('the user wants to add a new ingredient item');
      };

      // Delete ingredient item from the list on click event
      $scope.deleteIngredientItem = function () {
        console.log('the user wants to delete an ingredient item');
      };

      // Add new step item on click event
      $scope.addNewStep = function () {
        console.log('the user wants to add a new step item');
      };

      $scope.deleteStep = function () {
        console.log('the user watns to delete a step item');
      };




      // Handle situation when the user wants to return to the home page
      $scope.returnHomePage = function () {
        $location.path('/')
      };
    });
})();
