(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDeleteController', function ($scope, $location, $routeParams, dataService) {
			
			//
				// Controller functions
			//
			// Deleting recipe when the delete button is clicked
			$scope.confirmDetele = function() {
				console.log($routeParams.id);
				dataService.deleteRecipe(
					$routeParams.id,
					function(response) {
						console.log(response);
						$location.path('/');
					},
					function(error) {
						console.log(error);
					}
				);
			};
			
			// Return to the home page of the web site
			$scope.cancelDetele = function() {
				$location.path('/');
			};
			
			
			//
				// The database calls
			//
      // Get the recipe according to the route parameters
			dataService.getRecipeById(
				// the ID of the recipe comming from the route parameter
				$routeParams.id,
				// If the id exists
				function(response) {
					$scope.recipe = response.data;
				},
				// If not, redirect to the home page
				function(error) {
					$location.path('/');
				}
			);

    });
})();
