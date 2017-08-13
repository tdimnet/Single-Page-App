'use strict';

angular
  .module('app')
  .service('dataService', function($http) {


  this.getAllRecipes = function() {
    $http
      .get('/api/recipes')
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      })
  };


  this.getAllCategories = function() {
    $http
      .get('/api/categories')
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      })
  };


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


  this.getRecipe = function () {
    $http
      .get('/api/recipes/{id}')
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  // TODO:
    // Add put method for recipes
    // Add post method for recipes
    // Add delete method for recipes

});
