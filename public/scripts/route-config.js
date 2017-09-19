(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller    : 'RecipesController',
        controllerAs  : 'vm',
        templateUrl   : 'templates/recipes.html'
      })
      .when('/recipe/:id', {
        controller    : 'RecipeViewController',
        controllerAs  : 'vm',
        templateUrl   : 'templates/recipe-view.html'
      })
      .when('/edit/:id', {
        controller    : 'RecipeDetailController',
        controllerAs  : 'vm',
        templateUrl   : 'templates/recipe-detail.html'
      })
      .when('/add', {
        controller    : 'RecipeDetailController',
        controllerAs  : 'vm',
        templateUrl   : 'templates/recipe-detail.html'
      })
      .when('/delete/:id', {
        controller    : 'RecipeDeleteController',
        controllerAs  : 'vm',
        templateUrl   : 'templates/recipe-delete.html'
      })
      .otherwise({
        redirectTo    : '/'
      });
  }
})();
