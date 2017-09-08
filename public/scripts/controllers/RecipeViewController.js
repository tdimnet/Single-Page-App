(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeViewController', function ($scope, $location, $routeParams, dataService) {

      console.log($routeParams.id);

    });
})();
