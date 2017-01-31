'use strict';

describe('Component: sujet', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.sujet'));

  var sujetComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sujetComponent = $componentController('sujet', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
