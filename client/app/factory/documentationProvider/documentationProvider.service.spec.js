'use strict';

describe('Service: documentationProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.documentationProvider'));

  // instantiate service
  var documentationProvider;
  beforeEach(inject(function(_documentationProvider_) {
    documentationProvider = _documentationProvider_;
  }));

  it('should do something', function() {
    expect(!!documentationProvider).toBe(true);
  });
});
