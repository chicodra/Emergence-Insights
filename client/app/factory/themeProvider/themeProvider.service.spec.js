'use strict';

describe('Service: themeProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.themeProvider'));

  // instantiate service
  var themeProvider;
  beforeEach(inject(function(_themeProvider_) {
    themeProvider = _themeProvider_;
  }));

  it('should do something', function() {
    expect(!!themeProvider).toBe(true);
  });
});
