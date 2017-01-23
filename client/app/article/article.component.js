'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './article.routes';

export class ArticleComponent {
  /*@ngInject*/
  listArticles;
  articleProvider;
  constructor(articleProvider) {
    this.message = 'Hello';
    this.articleProvider=articleProvider;

  }
  Init(){
    //this.listTheme=[];


    this.articleProvider.listArticles().then(list => {
      this.listArticles=list;

      console.log('themes', this.listArticles)




    });
  }
}
ArticleComponent.$inject = ["articleProvider"];


export default angular.module('emergenceInsightsApp.article', [uiRouter])
  .config(routes)
  .component('article', {
    template: require('./article.html'),
    controller: ArticleComponent,
    controllerAs: 'vm'
  })
  .name;
