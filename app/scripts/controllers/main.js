'use strict';

/**
 * @ngdoc function
 * @name 2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2App
 */
angular.module('2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
