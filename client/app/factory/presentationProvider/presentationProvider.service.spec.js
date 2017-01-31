'use strict';

describe('Service: presentationProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.presentationProvider'));

  // instantiate service
  var presentationProvider;
  beforeEach(inject(function(_presentationProvider_) {
    presentationProvider = _presentationProvider_;
  }));

  it('should do something', function() {
    expect(!!presentationProvider).toBe(true);
  });
});
