(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipesController', function ($scope, $location, dataService) {
			
			//
				// Controller variables
			//
			$scope.currentCategory = {};
			
			//
				// Controller functions
			//
			$scope.addRecipe = function() {
				$location.path('/add');
			};
			
			$scope.filterRecipeByCategory = function() {
				var category = $scope.currentCategory ? $scope.currentCategory.name : "";
				dataService.getRecipesByCategory(
					category,
					function (response) {
						console.log(response);
					},
					function (error) {
						console.log(error);
					}
				);
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
