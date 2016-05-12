'use strict';

angular.module('fundlistApp')
  .controller('MainCtrl', function ($scope, Mainservice) {
    Mainservice.then(function(result){
      $scope.fund = result;
    });
  });
