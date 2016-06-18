'use strict';

describe('Service: Mainservice', function () {

  // load the service's module
  beforeEach(module('crossoverApp'));

  // instantiate service
  var Mainservice, httpBackend;
  beforeEach(inject(function (_Mainservice_, $httpBackend) {
    Mainservice = _Mainservice_;
    httpBackend = $httpBackend;
  }));

  it('should exist', function () {
    expect(!!Mainservice).toBe(true);
  });

  it('should return 200', function() {
    httpBackend.whenGET('../../data/data.json').respond(200, {});
    
    httpBackend.flush();
  });
});
