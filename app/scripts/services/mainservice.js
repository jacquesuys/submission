'use strict';

angular.module('fundlistApp')
  .service('Mainservice', function Mainservice($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function extract(result) {
      return result.data.fund;
    }
    return $http.get('../../data/fund.json').then(extract);
  });
