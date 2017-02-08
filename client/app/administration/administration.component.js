'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './administration.routes';

export class AdministrationComponent {
  /*@ngInject*/
  jsFunctionProvider;
  themeProvider;
  articleProvider;
  listInterviews;
  listArticles;
  alaune;
  datetime;
  selected;
  currentdate = new Date();
  reponseProvider;
  questionProvider;
  interviewsProvider;
  listinterview;
  listquestion;
  listreponse;
  //id_theme;
  //image;
  //une;


  constructor(jsFunctionProvider, themeProvider, articleProvider, interviewsProvider, reponseProvider, questionProvider) {

    this._id = '';
    this.titre = '';
    this.auteur = '';
    this.contenu = '';
    this.themearticl = '';
    this.une = '';
    this.libelle = '';
    this.contenuInterviews = '';
    this.intervenant = '';
    this.themeinterv = '';
    this.artic = "";
    this.themeProvider = themeProvider;
    this.articleProvider = articleProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    this.articleProvider = articleProvider;
    this.action = "Ajouter";
    this.reponseProvider = reponseProvider;
    this.interviewsProvider = interviewsProvider;
    this.questionProvider = questionProvider;
    console.log('this', this);
    this.datetime = this.currentdate.getDate() + "/" +
      (this.currentdate.getMonth() + 1) + "/" +
      this.currentdate.getFullYear();
  }
  setTutorial(value) {
    this.selected = value;
  }
  editionArticle(artic) {
    if (artic === "") {
      this.action = "Ajouter";
      if (this.selected) {
        if (this.une) {
          this.alaune = true;
          this.articleProvider.ajoutSujet(this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
          window.location.reload();
          this.titre = '';
          this.auteur = '';
          this.contenu = '';
          this.datetime = '';
          this.selected = '';
        } else {
          this.alaune = false;
          this.articleProvider.ajoutSujet(this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
          window.location.reload();
          this.titre = '';
          this.auteur = '';
          this.contenu = '';
          this.datetime = '';
          this.selected = '';
        }

      } else {
        if (this.une) {
          this.selected = null;
          this.alaune = true;
          this.articleProvider.ajoutSujet(this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
          window.location.reload();
          this.titre = '';
          this.auteur = '';
          this.contenu = '';
          this.datetime = '';
        } else {
          this.selected = null;
          this.alaune = false;
          this.articleProvider.ajoutSujet(this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
          window.location.reload();
          this.titre = '';
          this.auteur = '';
          this.contenu = '';
          this.datetime = '';
        }

      }

    } else {
      if (artic === "modifier") {
        if (this.selected) {
          if (this.une) {
            this.alaune = true;
            this.articleProvider.modifier(this._id,this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
            window.location.reload();
            this.titre = '';
            this.auteur = '';
            this.contenu = '';
            this.datetime = '';
            this.selected = '';
          } else {
            this.alaune = false;
            this.articleProvider.modifier(this._id,this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
            window.location.reload();
            this.titre = '';
            this.auteur = '';
            this.contenu = '';
            this.datetime = '';
            this.selected = '';
          }

        } else {
          if (this.une) {
            this.selected = null;
            this.alaune = true;
            this.articleProvider.modifier(this._id,this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
            window.location.reload();
            this.titre = '';
            this.auteur = '';
            this.contenu = '';
            this.datetime = '';
          } else {
            this.selected = null;
            this.alaune = false;
            this.articleProvider.modifier(this._id,this.titre, this.auteur, this.contenu, this.datetime, this.selected, this.alaune);
            window.location.reload();
            this.titre = '';
            this.auteur = '';
            this.contenu = '';
            this.datetime = '';
          }

        }

      }
    }
  }

  editArticl(article) {
    console.log('okkkkkk');
    this.action = "Modifier";
    this._id = article._id;
    this.titre = article.titre;
    this.auteur = article.auteur;
    this.contenu = article.contenu;
    this.themearticl = article.id_theme;
    this.une = article.une;
    this.artic = "modifier";
    /*console.log('li lane la', this._id);*/

  }

  getQuestionByInterview(id) {
    this.questionProvider.listQuestionsInterviews(id).then(list => {
      this.listquestion = list;
      console.log('Question yiiii', this.listquestion);
      for (var i = 0; i < this.listquestion.length; i++) {
        this.getReponseByQuestion(this.listquestion[i]._id);
      }
    });
  }
  getReponseByQuestion(id) {
    this.reponseProvider.getReponseByQuestion(id).then(list => {
      this.listreponse = list;

      console.log('Reponse yiiii', this.listreponse);
    });
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
    if (this.interviewsProvider.listeInt == null) {
      this.interviewsProvider.listInterviews().then(list => {
        this.listInterviews = list;
        this.interviewsProvider.listeInt = list;
        console.log('interviews vide', this.listInterviews)
        console.log('nombre interviews', this.interviewsProvider.listInterviews.length);
        // this.interview = list[0];
        this.image = '../../assets/images/perfstock/experts/' + this.listInterviews.image;

      });

    } else {
      this.listInterviews = this.interviewsProvider.listeInt;
      console.log('interviews non vide', this.listInterviews)

    }
    this.articleProvider.listArticles().then(list => {
      this.listArticles = list;

      console.log('article', this.listArticles)
    });

    this.interviewsProvider.listInterviews().then(list => {
      this.listinterview = list;
      console.log('Interviews yiii', this.listinterview);
      /* for (var i = 0; i < this.listinterview.length; i++) {
         this.getQuestionByInterview(this.listinterview[i]._id);
       }*/
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


  editInterv(interv) {
    console.log('okkkkkk')
    this.libelle = interv.libelle;
    this.intervenant = interv.intervenant;
    this.contenuInterviews = interv.contenu;
    this.themeinterv = interv.id_theme;
    // this.une = article.une;

  }
}






AdministrationComponent.$inject = ["jsFunctionProvider", "themeProvider", "articleProvider", "interviewsProvider", "reponseProvider", "questionProvider"];


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
