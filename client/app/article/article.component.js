'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './article.routes';

export class ArticleComponent {
  /*@ngInject*/
  listArticles;
  articleProvider;
  jsFunctionProvider;
  params;
  constructor(articleProvider, jsFunctionProvider,$stateParams) {
    this.message = 'Hello';
    this.articleProvider = articleProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    this.params=$stateParams;
    console.log('article',this);

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
ArticleComponent.$inject = ["articleProvider", "jsFunctionProvider","$stateParams"];


export default angular.module('emergenceInsightsApp.article', [uiRouter])
  .config(routes)
  .component('article', {
    template: require('./article.html'),
    controller: ArticleComponent,
    controllerAs: 'vm'
  })
  .name;
