'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pays.routes';

export class PaysComponent {
  /*@ngInject*/
  paysProvider;
  listPays;
  constructor(paysProvider) {
    this.message = 'Hello';
    this.paysProvider=paysProvider;
    console.log('this',this);
  }

  Init(){
    //this.listTheme=[];


    this.paysProvider.listPays().then(list => {
      this.listPays=list;

      console.log('pays', this.listPays)




    });
  }
}
PaysComponent.$inject = ["paysProvider"];
export default angular.module('emergenceInsightsApp.pays', [uiRouter])
  .config(routes)
  .component('pays', {
    template: require('./pays.html'),
    controller: PaysComponent,
    controllerAs: 'vm'
  })
  .name;
