'use strict';

describe('Component: revueArticles', function() {
  // load the component's module
  beforeEach(module('emergenceInsightsApp.revueArticles'));

  var revueArticlesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    revueArticlesComponent = $componentController('revueArticles', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
