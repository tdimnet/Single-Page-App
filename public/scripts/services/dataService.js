(function () {
  'use strict';
	
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
      this.getRecipesByCategory = function (category, callbackSuccess, callbackError) {
        $http
          .get('/api/recipes?category=' + category)
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Gets the recipe for the specified ID
      this.getRecipeById = function (recipedId, callbackSuccess, callbackError) {
        $http
          .get('/api/recipes/' + recipedId)
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Updates the recipe for the specified ID
      this.updateRecipe = function (recipe, callbackSuccess, callbackError) {
        $http
          .put('/api/recipes/' + recipe._id, recipe)
          .then(callbackSuccess)
          .catch(callbackError)
      };


      // Adds a recipe
      this.addRecipe = function (recipe, callbackSuccess, callbackError) {
        $http
          .post('/api/recipes', recipe)
          .then(callbackSuccess)
          .catch(callbackError)
      };
			

      // Deletes the recipe for the specified ID
      this.deleteRecipe = function (recipedId, callbackSuccess, callbackError) {
        $http
          .delete('/api/recipes/' + recipedId)
          .then(callbackSuccess)
          .catch(callbackError)
      };
    });
})();
