(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipesController', function ($scope, $location, dataService) {
			
			//
				// Controller functions
			//
			$scope.addRecipe = function() {
				$location.path('/add');
			};
			
			
			
			//
				// The database calls
			//
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

      // Get all categories from the database for the selected menu
      dataService.getAllCategories(
        // if correct
        function (response) {
          $scope.categories = response.data
        },
        // If not, for now, show error within the console
        function (error) {
          console.log(error);
        }
      );
    });
})();
