'use strict';

angular.module('fundlistApp')
  .filter('convertUSDate', function () {
    return function (input) {
      var arr = input.split('/');
      var temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
      return arr.join('/');
    };
  });
