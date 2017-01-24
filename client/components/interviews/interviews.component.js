'use strict';
const angular = require('angular');

export class interviewsComponent {
  /*@ngInject*/
  interviewsProvider;
  listInterviews;
  constructor(interviewsProvider) {
    this.message = 'World';
    this.interviewsProvider=interviewsProvider;
    console.log('this',this);
  }
  Init(){
    if(this.interviewsProvider.listeInt==null){
      this.interviewsProvider.listInterviews().then(list => {
        this.listInterviews=list;
        this.interviewsProvider.listeInt=list;
        console.log('interviews vide', this.listInterviews)
      });

    }
    else{
      this.listInterviews=this.interviewsProvider.listeInt;
      console.log('interviews non vide', this.listInterviews)

    }
  }
}
interviewsComponent.$inject=["interviewsProvider"]
//interviewsComponent.$inject = ["paysProvider","jsFunctionProvider"];

export default angular.module('emergenceInsightsApp.interviews', [])
  .component('interviews', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./interviews.html'),
    bindings: { message: '<' },
    controller: interviewsComponent,
    controllerAs: 'vm'
  })
  .name;
