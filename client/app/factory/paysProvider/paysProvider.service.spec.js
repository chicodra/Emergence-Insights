'use strict';

describe('Service: paysProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.paysProvider'));

  // instantiate service
  var paysProvider;
  beforeEach(inject(function(_paysProvider_) {
    paysProvider = _paysProvider_;
  }));

  it('should do something', function() {
    expect(!!paysProvider).toBe(true);
  });
});
