'use strict';

angular.module('crossoverApp')
  .controller('MainCtrl', function ($scope, $http, Mainservice) {
    Mainservice.then(function(result){
      $scope.tests = result.data;
    });

    $scope.Math = window.Math;

    // TODO setup a directive
    $scope.isOpen = '';
    $scope.toggle = function($index) {
      $scope.isOpen = $index;
    };

    $scope.switch = false;
    $scope.lightbox = function() {
      $scope.switch = !$scope.switch;
    };

  });
