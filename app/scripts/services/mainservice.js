'use strict';

angular.module('crossoverApp')
  .service('Mainservice', function Mainservice($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $http.get('../../data/data.json');
  });
