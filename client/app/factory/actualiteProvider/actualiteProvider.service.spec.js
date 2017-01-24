'use strict';

describe('Service: actualiteProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.actualiteProvider'));

  // instantiate service
  var actualiteProvider;
  beforeEach(inject(function(_actualiteProvider_) {
    actualiteProvider = _actualiteProvider_;
  }));

  it('should do something', function() {
    expect(!!actualiteProvider).toBe(true);
  });
});
