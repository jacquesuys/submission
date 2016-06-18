'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('crossoverApp'));

  var MainCtrl, $scope, $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, $rootScope) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: $scope
    });
  }));

  it('should exist', function () {
    expect(!!$controller).toBe(true);
  });

});
