(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDetailController', function ($scope, $location, $routeParams, dataService) {
			
			//
				// Controller variables
			//
			$scope.mainViewTitle = 'Add New Recipe';
			$scope.categories = [];
			$scope.foodItems = [];
			
			
			//
				// Controller functions
			//
			// Main functions ?
			
			// Return to the home page of the web site
			$scope.cancelEdit = function() {
				$location.path('/');
			};
			
			
			
			//
				// The database calls
			//
      // Get the recipe according to the current routeParams ID when the path is /edit
			if ($location.url() !== '/add') {
				dataService.getRecipeById(
					// The recipe ID
					$routeParams.id,
					// If correct
					function (response) {
						$scope.recipe = response.data;
						$scope.mainViewTitle = $scope.recipe.name;
					},
					// If not, redirect to the home page
					function (error) {
						$location.path('/');
					}
				);
			}
			
			// Get all categories when the route is matched
			dataService.getAllCategories(
				function(response) {
					$scope.categories = response.data;
				},
				function(error) {
					console.log(error);
				}
			);
			
			// Get all food items
			dataService.getAllFoodItems(
				function(response) {
					console.log(response);
				},
				function(error) {
					console.log(error);
				}
			);
			
    });
})();










