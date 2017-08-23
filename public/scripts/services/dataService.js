'use strict';

angular
  .module('app')
  .service('dataService', function($http) {


  this.getAllRecipes = function(callbackSuccess, callbackError) {
    $http
      .get('/api/recipes')
      .then(callbackSuccess)
      .catch(callbackError)
  };


  this.getAllCategories = function (callbackSuccess, callbackError) {
    $http
      .get('/api/categories')
      .then(callbackSuccess)
      .catch(callbackError)
  }


  this.getAllFoodItems = function() {
    $http
      .get('/api/fooditems')
      .then(function(data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  // TODO: See how to pass parameters to a http function
  this.getRecipesByCategory = function() {
    $http
      .get('/api/recipes?category={category}')
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  this.getRecipe = function (recipe) {
    console.log("The recipe number " + recipe + " has been selected to edit!")
    // $http
    //   .get('/api/recipes/{id}')
    //   .then(callbackSuccess)
    //   .catch(callbackError)
  };


  this.deleteRecipe = function (recipe) {
    console.log("The recipe number " + recipe + " has been selected to delete!")
    // $http
    //   .get('/api/recipes/{id}')
    //   .then(callbackSuccess)
    //   .catch(callbackError)
  };


  // TODO:
    // Add put method for recipes
    // Add post method for recipes
    // Add delete method for recipes

});
