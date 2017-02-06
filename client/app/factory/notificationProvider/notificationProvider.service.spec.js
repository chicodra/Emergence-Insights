'use strict';

describe('Service: notificationProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.notificationProvider'));

  // instantiate service
  var notificationProvider;
  beforeEach(inject(function(_notificationProvider_) {
    notificationProvider = _notificationProvider_;
  }));

  it('should do something', function() {
    expect(!!notificationProvider).toBe(true);
  });
});
