(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeViewController', function ($scope, $location, $routeParams, dataService) {

			// Get the recipe according to the route parameters
			dataService.getRecipeById(
				// the ID of the recipe comming from the route parameter
				$routeParams.id,
				// If the id exists
				function(response) {
					console.log(response);
					$scope.recipe = response.data;
				},
				// If not, redirect to the home page
				function(error) {
					$location.path('/');
				}
			);

    });
})();
