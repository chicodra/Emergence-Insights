'use strict';

describe('Component: ArticleComponent', function() {
  // load the controller's module
  beforeEach(module('emergenceInsightsApp.article'));

  var ArticleComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ArticleComponent = $componentController('article', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
