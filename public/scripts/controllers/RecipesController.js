'use strict';

angular
  .module('app')
  .controller('RecipesController', function ($scope, dataService) {


    // Get all receipes from the Database or display error message
    dataService.getAllRecipes(
      function (response) {
        $scope.recipes = response.data;
      },
      function (error) {
        console.error(error);
      }
    );


});
