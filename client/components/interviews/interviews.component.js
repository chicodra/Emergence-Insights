'use strict';
const angular = require('angular');

export class interviewsComponent {
  /*@ngInject*/
  interviewsProvider;
  listInterviews;
  jsFunctionProvider;
  constructor(jsFunctionProvider, interviewsProvider) {
    this.message = 'World';
    this.interviewsProvider = interviewsProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    console.log('interviews', this);
  }
  Init() {
    if (this.interviewsProvider.listeInt == null) {
      this.interviewsProvider.listInterviews().then(list => {
        this.listInterviews = list;
        this.interviewsProvider.listeInt = list;
        console.log('interviews vide', this.listInterviews)
        // this.interview = list[0];
        this.image = '../../assets/images/perfstock/experts/' + this.listInterviews.image;

      });

    } else {
      this.listInterviews = this.interviewsProvider.listeInt;
      console.log('interviews non vide', this.listInterviews)

    }
    angular.element(document)
      .ready(() => {
        document.querySelector('header').style.backgroundColor = '';
        console.log('document main', document);
        /* demo animated */
        this.jsFunctionProvider.demoAnimated();
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.initSwiper();
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
interviewsComponent.$inject = ["jsFunctionProvider", "interviewsProvider"];

export default angular.module('emergenceInsightsApp.interviews', [])
  .component('interviews', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./interviews.html'),
    bindings: {
      message: '<'
    },
    controller: interviewsComponent,
    controllerAs: 'vm'
  })
  .name;
