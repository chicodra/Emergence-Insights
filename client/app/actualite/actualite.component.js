'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './actualite.routes';

export class ActualiteComponent {
  /*@ngInject*/
  jsFunctionProvider;
  params;
  actualite;
  actualiteProvider;
  constructor(jsFunctionProvider,$stateParams,actualiteProvider) {
    this.message = 'hii';
    this.jsFunctionProvider=jsFunctionProvider;
    this.params=$stateParams;
    this.actualiteProvider=actualiteProvider;
    this.getActualite(this.params.libelle)
    console.log('this actualite', this);
  }
  Init(){
    document.querySelector('header').style.backgroundColor= '#222';
    angular.element(document)
      .ready(() => {

        console.log('document pilier',document);
        /* demo animated */
        this.jsFunctionProvider.demoAnimated();
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.onPageResize();
        this.jsFunctionProvider.onSliderArrowClick();
        this.jsFunctionProvider.onPageScroll();
        /*==============================*/
        /* 08 - BUTTONS, CLICKS, HOVERS */
        /*==============================*/
        this.jsFunctionProvider.topMenu();
        this.jsFunctionProvider.videoPlayBtn();
        this.jsFunctionProvider.videoPlayBtnBig();
        this.jsFunctionProvider.Popup();
        this.jsFunctionProvider.hoverAnimation();
        this.jsFunctionProvider.changeImageOnSpeaker();
        this.jsFunctionProvider.hoverAnimationOnConference();
        /*==================================================*/
        /* 09 - TIMES, TABS */
        /*==================================================*/
        this.jsFunctionProvider.Timers();
        this.jsFunctionProvider.CountDown();
        this.jsFunctionProvider.Tabs();
        /*=====================*/
        /* 10 - LIGHT-BOX */
        /*=====================*/
        this.jsFunctionProvider.activityIndicatorFunctions();
        this.jsFunctionProvider.closeButtonFunctions();
        this.jsFunctionProvider.overLay();
        this.jsFunctionProvider.capTion();
        this.jsFunctionProvider.arrOws();
        /*==================================================*/
        /* 11 - STYLE BAR */
        /*==================================================*/
        this.jsFunctionProvider.confButton();
        this.jsFunctionProvider.entryButton();

        /*==================================================*/
        /* 13 - AJAX CONTACT FORM */
        /*==================================================*/
        this.jsFunctionProvider.ajaxContactForm();




      });
  }
  getActualite(libelle){
    this.actualiteProvider.getActualiteByName(libelle).then(list =>{
      this.actualite=list;
      console.log('actualite single',list);
    })
  }
}
ActualiteComponent.$inject=["jsFunctionProvider","$stateParams","actualiteProvider"];
export default angular.module('emergenceInsightsApp.actualite', [uiRouter])
  .config(routes)
  .component('actualite', {
    template: require('./actualite.html'),
    controller: ActualiteComponent,
    controllerAs: 'vm'
  })
  .name;
