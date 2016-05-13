'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fundlistApp'));

  var MainCtrl, $scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: $scope
    });
  }));

  it('should not have an empty object on the fund', function () {
    expect($scope.fund).not.toBeNull();
  });

});
