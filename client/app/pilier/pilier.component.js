'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
import routes from './pilier.routes';
export class PilierComponent {


  /*@ngInject*/
  themeprovider;
  listTheme;

  constructor(themeProvider) {
    this.message = 'Hello';


    this.themeprovider=themeProvider;
    console.log('init',this);



  }
  Init() {
    //this.listTheme=[];

    document.querySelector('header').style.backgroundColor = '#222'

    if(this.themeprovider.listTheme==null){
      this.themeprovider.listThemes().then(list => {
        this.listTheme=list;
        this.themeprovider.listTheme=list;

        console.log('themes', this.listTheme)


      });
    }
    else{
      this.listTheme=this.themeprovider.listTheme
      console.log('themes non vide', this.listTheme)
    }



  }



}
export class ActionComponent {
  init() {
    document.querySelector('header').style.backgroundColor = '#222';
  }
}
PilierComponent.$inject = ["themeProvider"];

export default angular.module('emergenceInsightsApp.pilier', [uiRouter])
  .config(routes)
  .component('pilier', {
    template: require('./pilier.html'),
    controller: PilierComponent,
    controllerAs: 'vm'

  })
  .component('action', {
    template: require('./templates/action.html'),
    controller: ActionComponent,
    controllerAs: 'vm'

  })
  .name;
  
