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
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      );




      $scope.returnHomePage = function () {
        $location.path('/')
      };
    });
})();
