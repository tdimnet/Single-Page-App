(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecipeDetailController', function ($scope, $location, dataService) {


      $scope.returnHomePage = function () {
        $location.path('/')
      };
    });
})();
