(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDetailController', function ($scope, $location, $routeParams, dataService) {
			
			//
				// Controller variables
			//
			// Recipe title
			$scope.mainViewTitle = 'Add New Recipe';

			// Recipe itself
			$scope.recipe = {
				name: "",
				description: "",
				category: "",
				prepTime: "",
				cookTime: "",
				ingredients: [],
				steps: []
			};
			
			// All categories and food items
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
			
			// Save the Added/Edited Recipe
			$scope.saveRecipe = function() {
				if ($location.url() === '/add') {
					dataService.addRecipe($scope.recipe);
					$location.path('/');
				} else {
					dataService.updateRecipe($scope.recipe);
					$location.path('/');
				}
			};
			
			
			// Add ingredient
			$scope.addIngredient = function() {
				$scope.recipe.ingredients.push({});
			};
			
			// Remove ingredient
			$scope.removeIngredient = function() {
				console.log('The user wants to remove an ingredient');
			};		
			
			// Add steps
			$scope.addStep = function() {
				$scope.recipe.steps.push({});
			};
			
			// Remove steps
			$scope.removeStep = function(index) {
				$scope.recipe.steps.splice(index, 1);
			}
			
			
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
					$scope.foodItems = response.data;
				},
				function(error) {
					console.log(error);
				}
			);
			
    });
})();










