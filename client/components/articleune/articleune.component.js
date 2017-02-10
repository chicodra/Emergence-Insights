'use strict';
const angular = require('angular');

export class articleuneComponent {
  /*@ngInject*/
  constructor(articleProvider, jsFunctionProvider) {
    this.message = 'World';
    this.articleProvider = articleProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    this.nb = 0;
    console.log('Articles à la une', this);
  }
  Init() {
    //this.listTheme=[];


    this.articleProvider.listAlaUne().then(list => {
      this.listArticles = list;

      console.log('themes', this.listArticles)






    });
  }
}


export default angular.module('emergenceInsightsApp.articleune', [])
  .component('articleune', {
    template: require('./alaune.html'),
    bindings: {
      message: '<'
    },
    controller: articleuneComponent,
    controllerAs: 'vm'
  })
  .name;
