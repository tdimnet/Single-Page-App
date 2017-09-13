(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDetailController', function ($scope, $location, $routeParams, dataService) {
      console.log($routeParams.id);

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
      // Get the recipe according to the current routeParams ID
      dataService.getRecipeById(
        // The recipe ID
        $routeParams.id,
        // If correct
        function (response) {
					$scope.recipe = response.data;
        },
        // If not
        function (error) {
          console.log(error);
        }
      );


    });
})();
