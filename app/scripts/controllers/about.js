'use strict';

/**
 * @ngdoc function
 * @name 2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 2App
 */
angular.module('2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
