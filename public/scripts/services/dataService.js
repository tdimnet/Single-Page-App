(function () {
  'use strict';


  /*
    This service makes all calls to the REST API
    --
    Few things to have in mind:
      - see if the request if parameters are made properly
      - see how post, put and delete methods work by looking for snippets
  */
  angular
    .module('app')
    .service('dataService', function ($http) {

      // Gets all recipes
      this.getAllRecipes = function (callbackSuccess, callbackError) {
        $http
          .get('/api/recipes')
          .then(callbackSuccess)
          .catch(callbackError)
      };


			// Gets all categories
      this.getAllCategories = function (callbackSuccess, callbackError) {
        $http
          .get('/api/categories')
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Gets all food items
      this.getAllFoodItems = function (callbackSuccess, callbackError) {
        $http
          .get('/api/fooditems')
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Gets all of the recipes for the specified category
      this.getAllRecipesByCategory = function (callbackSuccess, callbackError) {
        $http
          // Maybe have to change the line below
          .get('/api/recipes?category={category}')
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Gets the recipe for the specified ID
      this.getRecipeById = function (callbackSuccess, callbackError) {
        $http
          .get('/api/recipes/RavlD5kdXqAofJQ6')
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Updates the recipe for the specified ID
      this.updateRecipeById = function (callbackSuccess, callbackError) {
        $http
          .put('/api/recipes/{id}')
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Adds a recipe
      this.addRecipe = function (callbackSuccess, callbackError) {
        $http
          .post('/api/recipes')
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Deletes the recipe for the specified ID
      this.deleteRecipe = function (callbackSuccess, callbackError) {
        $http
          .delete('/api/recipes/{id}')
          .then(callbackSuccess)
          .catch(callbackError)
      };
    });
})();
