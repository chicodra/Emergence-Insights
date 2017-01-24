'use strict';

describe('Component: interviews', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.interviews'));

  var interviewsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    interviewsComponent = $componentController('interviews', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
