'use strict';

describe('Component: InterviewComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.interview'));

  var InterviewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    InterviewComponent = $componentController('interview', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
