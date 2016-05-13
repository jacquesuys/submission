'use strict';

describe('Filter: mainFilter', function () {

  // load the filter's module
  beforeEach(module('fundlistApp'));

  // initialize a new instance of the filter before each test
  var convertUSDate;
  beforeEach(inject(function ($filter) {
    convertUSDate = $filter('convertUSDate');
  }));

  it('should return the input with the new date format"', function () {
    var text = '03/04/1975';
    expect(convertUSDate(text)).toBe('04/03/1975');
  });

});
