'use strict';

describe('Service: menuProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.menuProvider'));

  // instantiate service
  var menuProvider;
  beforeEach(inject(function(_menuProvider_) {
    menuProvider = _menuProvider_;
  }));

  it('should do something', function() {
    expect(!!menuProvider).toBe(true);
  });
});
