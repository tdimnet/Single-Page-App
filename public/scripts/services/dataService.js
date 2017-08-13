'use strict';

angular
  .module('app')
  .service('dataService', function($http) {

  this.helloWorld = function() {
    console.log('This is the data service method!');
  };

});
