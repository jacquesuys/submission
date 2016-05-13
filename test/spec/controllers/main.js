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

  it('can\'t think of anything to test here', function () {
    expect(true).toEqual(true);
  });

});
