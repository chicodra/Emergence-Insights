'use strict';

describe('Component: sectionInformation', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.sectionInformation'));

  var sectionInformationComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sectionInformationComponent = $componentController('sectionInformation', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
