(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipesController', function ($scope, dataService) {

      // When the user wants to add a new recipe
      $scope.addRecipe = function () {
        console.log('The user wants to create a new recipe');
      };

    });
})();
