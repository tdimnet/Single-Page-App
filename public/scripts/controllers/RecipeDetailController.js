(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDetailController', function ($scope, $location, dataService) {


      // Get all categories from the database
      dataService.getAllCategories(
        function (response) {
          $scope.categories = response.data
        },
        function (error) {
          console.error(error);
        }
      );

      


      $scope.returnHomePage = function () {
        $location.path('/')
      };
    });
})();
