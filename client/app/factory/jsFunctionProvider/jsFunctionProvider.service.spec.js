'use strict';

describe('Service: jsFunctionProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.jsFunctionProvider'));

  // instantiate service
  var jsFunctionProvider;
  beforeEach(inject(function(_jsFunctionProvider_) {
    jsFunctionProvider = _jsFunctionProvider_;
  }));

  it('should do something', function() {
    expect(!!jsFunctionProvider).toBe(true);
  });
});
