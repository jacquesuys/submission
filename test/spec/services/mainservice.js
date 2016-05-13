'use strict';

describe('Service: Mainservice', function () {

  // load the service's module
  beforeEach(module('fundlistApp'));

  // instantiate service
  var Mainservice, httpBackend;
  beforeEach(inject(function (_Mainservice_, $httpBackend) {
    Mainservice = _Mainservice_;
    httpBackend = $httpBackend;
  }));

  it('should do something', function () {
    expect(!!Mainservice).toBe(true);
  });

  it('should return the following results', function() {
    httpBackend.whenGET('../../data/fund.json').respond(200, {
      "fund": {
        "Fund Name": "JPMorgan Japan Smaller Companies Investment Trust Plc-JPM Japan Smaller 2014 Subs",
        "security": "GB0031835111",
        "Sector": "Emerging",
        "Asset Class": "Bond",
        "Investment Style": "Income",
        "Launch Date": "03/04/1975",
        "Morningstar Rating": 3,
        "NAV": 12.39,
        "NAV Change": 12.39,
        "1 Day Return": "",
        "YTD Return": "",
        "Fund Size": 405782869.21,
        "Region": "Emerging Markets",
        "Currency": "USD",
        "Ticker Symbol": "",
        "Total Returns": "",
        "Average Annual Returns": "",
        "Yield": "-",
        "Date": "26/09/2014"
      }
    });
    
    httpBackend.flush();
  });
});
