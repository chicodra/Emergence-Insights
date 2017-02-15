'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

const uiSwip = require('angular-ui-swiper');

import routes from './article.routes';

export class ArticleComponent {
  /*@ngInject*/
  article;
  articleProvider;
  jsFunctionProvider;
  params;
  constructor(articleProvider, jsFunctionProvider, $stateParams) {
    this.message = 'Hello';
    this.params = $stateParams;
    this.articleProvider = articleProvider;
    this.articleProvider.getArticleByName(this.params.libelle).then(list => {

      this.article = list[0];
      this.image = '../../assets/images/perfstock/article/' + this.article.image;
      // console.log('image', this.image);
      document.getElementById('imagArticle').style.backgroundImage = 'url(' + this.article.image+ ')';
      document.getElementById('imagArticle').style.backgroundSize = 'cover';
      console.log('imagArticle', imagArticle);
      console.log('single article', this.article)
    });
    this.jsFunctionProvider = jsFunctionProvider;

    console.log('article', this);

  }
  Init() {
    //this.listTheme=[];


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

        // this.jsFunctionProvider.megaMenu();

        this.jsFunctionProvider.globals();

        this.jsFunctionProvider.anchorsNav();

        // this.jsFunctionProvider.googlemap();

      });

  }
}
ArticleComponent.$inject = ["articleProvider", "jsFunctionProvider", "$stateParams"];


export default angular.module('emergenceInsightsApp.article', [uiRouter, uiSwip])
  .config(routes)
  .component('article', {
    template: require('./article.html'),
    controller: ArticleComponent,
    controllerAs: 'vm'
  })
  .name;
