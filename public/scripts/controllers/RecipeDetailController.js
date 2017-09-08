(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDetailController', function ($scope, $location, $routeParams, dataService) {
      console.log($routeParams.id);

      // Get the recipe according to the current routeParams ID
      dataService.getRecipeById(
        // The recipe ID
        $routeParams.id,
        // If correct
        function (response) {
          console.log(response);
        },
        // If not
        function (error) {
          console.log(error);
        }
      );


    });
})();
