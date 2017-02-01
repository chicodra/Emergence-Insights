'use strict';

describe('Component: articleune', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.articleune'));

  var articleuneComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    articleuneComponent = $componentController('articleune', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
