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
			// Go to the add Recipe when add path is trigered
			$scope.addRecipe = function() {
				$location.path('/add');
			};
			
			// Filter the recipe according to the caterogy choosen
			$scope.filterRecipeByCategory = function() {
				var category = $scope.currentCategory ? $scope.currentCategory.name : "";
				dataService.getRecipesByCategory(
					category,
					function (response) {
						$scope.recipes = response.data;
					},
					function (error) {
						console.log(error);
					}
				);
			};
			
			// If there are not recipes to display, show the message
			$scope.noRecipeFromFilter = function() {
				if ($scope.recipes !== undefined) {
					return $scope.recipes.length === 0;
				}
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
