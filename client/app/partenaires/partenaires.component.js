'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './partenaires.routes';

export class PartenairesComponent {
  /*@ngInject*/
  jsFunctionProvider;
  constructor(jsFunctionProvider) {
    this.jsFunctionProvider = jsFunctionProvider;
    this.message = 'Hello';
    document.querySelector('header').style.backgroundColor = "#222";
  }
  Init() {
      angular.element(document)
      .ready(() => {

        console.log('document pilier',document);
        document.querySelector('header').style.backgroundColor = '#222'
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
}
PartenairesComponent.$inject= ["jsFunctionProvider"]
export default angular.module('emergenceInsightsApp.partenaires', [uiRouter])
  .config(routes)
  .component('partenaires', {
    template: require('./partenaires.html'),
    controller: PartenairesComponent,
    controllerAs: 'partenairesCtrl'
  })
  .name;
