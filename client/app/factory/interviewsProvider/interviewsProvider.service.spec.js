'use strict';

describe('Service: interviewsProvider', function() {
  // load the service's module
  beforeEach(module('emergenceInsightsApp.interviewsProvider'));

  // instantiate service
  var interview;
  beforeEach(inject(function(_interview_) {
    interview = _interview_;
  }));

  it('should do something', function() {
    expect(!!interview).toBe(true);
  });
});
