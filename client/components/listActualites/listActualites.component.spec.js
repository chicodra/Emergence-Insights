'use strict';

describe('Component: listActualites', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.listActualites'));

  var listActualitesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    listActualitesComponent = $componentController('listActualites', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
