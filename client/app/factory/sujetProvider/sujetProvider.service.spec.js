'use strict';

describe('Service: sujetProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.sujetProvider'));

  // instantiate service
  var sujetProvider;
  beforeEach(inject(function(_sujetProvider_) {
    sujetProvider = _sujetProvider_;
  }));

  it('should do something', function() {
    expect(!!sujetProvider).toBe(true);
  });
});
