'use strict';

describe('Service: agendaProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.agendaProvider'));

  // instantiate service
  var agendaProvider;
  beforeEach(inject(function(_agendaProvider_) {
    agendaProvider = _agendaProvider_;
  }));

  it('should do something', function() {
    expect(!!agendaProvider).toBe(true);
  });
});
