'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './administration.routes';

export class AdministrationComponent {
  /*@ngInject*/
  jsFunctionProvider;
  themeProvider;
  articleProvider;

  listArticles;
  
  listarticle;
  datetime;
  selected;
  currentdate = new Date();
  //id_theme;
  //image;
  //une;

  constructor(jsFunctionProvider, themeProvider, articleProvider) {

     this.titre = '';
    this.auteur = '';
    this.contenu = '';
    this.themearticl = '';
    this.une = '';
    this.themeProvider = themeProvider;
    this.articleProvider = articleProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    this.articleProvider = articleProvider;
    console.log('this', this);
    this.datetime = this.currentdate.getDate() + "/" +
      (this.currentdate.getMonth() + 1) + "/" +
      this.currentdate.getFullYear();
  }
  setTutorial (value) {
  this.selected = value;
  }
  addArticle() {
    if (this.selected) {
      this.articleProvider.ajoutSujet(this.titre, this.auteur, this.contenu, this.datetime, this.selected);
      this.articleProvider.listArticles().then(list => {
        this.listarticle = list;
        console.log('Article You Bess', this.listarticle);
      });
    } else {
      this.theme = '';
      this.articleProvider.ajoutSujet(this.titre, this.auteur, this.contenu, this.datetime);
      this.articleProvider.listArticles().then(list => {
        this.listarticle = list;
        console.log('Article You Bess', this.listarticle);
      });
    }

  }
  Init() {
    if (this.themeProvider.listTheme == null) {
      this.themeProvider.listThemes().then(list => {
        this.listTheme = list;
        this.themeProvider.listTheme = list;

        console.log('themes vide', this.listTheme)

      });
    } else {
      this.listTheme = this.themeProvider.listTheme
      console.log('themes non vide', this.listTheme)
    }

    this.articleProvider.listArticles().then(list => {
      this.listArticles = list;

      console.log('article', this.listArticles)
    });
    angular.element(document)
      .ready(() => {

        console.log('document pilier', document);
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


    setTimeout(function () {
      document.querySelector('header').style.backgroundColor = '#222';
    }, 100);
  }

  editArticl(article) {
    console.log('okkkkkk')
    this.titre = article.titre;
    this.auteur = article.auteur;
    this.contenu = article.contenu;
    this.themearticl = article.id_theme;
    this.une = article.une;

  }
}





AdministrationComponent.$inject = ["jsFunctionProvider", "themeProvider", "articleProvider"];

AdministrationArticleComponent.$inject = ["jsFunctionProvider", "themeProvider", "articleProvider"];

export default angular.module('emergenceInsightsApp.administration', [uiRouter])
  .config(routes)
  .component('administration', {
    template: require('./administration.html'),
    controller: AdministrationComponent,
    controllerAs: 'administrationCtrl'
  })
  .component('editerarticle', {
    template: require('./editerarticle.html'),
    controller: AdministrationComponent,
    controllerAs: 'vm'
  })
  .component('editerinterviews', {
    template: require('./editerinterviews.html'),
    controller: AdministrationComponent,
    controllerAs: 'vm'
  })
  .name;
