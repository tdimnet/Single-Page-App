(function () {
  'use strict';

  angular
    .module('app')
    .service('dataService', function ($http) {

      // Get all recipes from the express rest api
      this.getAllRecipes = function (callbackSuccess, callbackError) {
        $http
          .get('/api/recipes')
          .then(callbackSuccess)
          .catch(callbackError)
      };

    });
})();
