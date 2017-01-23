'use strict';

describe('Component: ficheDeBonnePratiques', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.ficheDeBonnePratiques'));

  var ficheDeBonnePratiquesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    ficheDeBonnePratiquesComponent = $componentController('ficheDeBonnePratiques', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
