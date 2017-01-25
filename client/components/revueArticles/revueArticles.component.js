'use strict';
const angular = require('angular');

export class revueArticlesComponent {
  /*@ngInject*/
  listArticles;
  articleProvider;
  jsFunctionProvider;
  nb;
  constructor(articleProvider, jsFunctionProvider) {
    this.message = 'Hello';
    this.articleProvider = articleProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    this.nb=0;
    console.log('revue d\'articles',this);

  }
  Init() {
    //this.listTheme=[];


    this.articleProvider.listArticles().then(list => {
      this.listArticles = list;

      console.log('themes', this.listArticles)

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




    });
  }
}
revueArticlesComponent.$inject = ["articleProvider", "jsFunctionProvider"];
export default angular.module('emergenceInsightsApp.revueArticles', [])
  .component('revueArticles', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./revueArticles.html'),
    bindings: { message: '<' },
    controller: revueArticlesComponent,
    controllerAs:'vm'
  })
  .name;
