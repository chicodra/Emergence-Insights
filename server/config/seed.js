/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import Theme from '../api/theme/theme.model';
import User from '../api/user/user.model';
import Article from '../api/article/article.model';
import Interview from '../api/interview/interview.model';
import Pays from '../api/pays/pays.model';
import Actualite from '../api/actualite/actualite.model';
import FicheActualite from '../api/fiche_actualite/fiche_actualite.model';
import Fiche from '../api/fiche_de_bonne_pratique/fiche_de_bonne_pratique.model';
import Partie from '../api/partie_theme/partie_theme.model';
import EtudeDeCas from '../api/etude_de_cas/etude_de_cas.model';
import Sujet from '../api/sujet/sujet.model';
import Message from '../api/message/message.model';
import Question from '../api/question/question.model';
import Reponse from '../api/reponse/reponse.model';
import Documentation from '../api/documentation/documentation.model';
import Agenda from '../api/agenda/agenda.model';

Documentation.find({}).remove()
  .then(()=>{
    Documentation.create(
      {
        _id: 1,
        libelle : 'Senegal Emergeant',
        contenu : 'Le Sénégal, en forme longue la République du Sénégal, est un pays d\'Afrique de l\'Ouest.' +
        ' Il est bordé par l\'océan Atlantique à l\'ouest, la Mauritanie au nord, à l\'est par le Mali, la Guinée' +
        ' et la Guinée-Bissau au sud. La Gambie forme une quasi-enclave dans le Sénégal, pénétrant à plus de 300 km à ' +
        'l\'intérieur des terres. Les îles du Cap-Vert sont situées à 560 km de la côte sénégalaise. ' ,
        id_pays :10

      },
    {
      _id: 2,
        libelle : 'Senegal Emergeant',
      contenu : 'Le pays doit son nom au fleuve qui le borde à l\'est et au nord et qui prend sa source dans le Fouta Djallon ' +
      'en Guinée. Le climat est tropical et sec avec deux saisons : la saison sèche et la saison des pluies.' +
      ' L\'actuel territoire du Sénégal a vu se développer plusieurs royaumes dont le Djolof, vassaux des empires successifs du Ghana,' +
      ' du Mali et Songhaï. Après 1591, il subit le morcellement politique ouest-africain consécutif à la bataille de Tondibi.' ,
      id_pays :10

    },
    {
      _id: 3,
        libelle : 'Senegal Emergeant',
      contenu : ' Au xviie siècle, plusieurs comptoirs appartenant à différents empires coloniaux Européens s\'établissent ' +
      'le long de la côte, ils servent de support au commerce triangulaire. La France prend peu à peu l\'ascendant sur les autres' +
      ' puissances puis érige Saint-Louis, Gorée, Dakar et Rufisque en communes françaises régies selon le statut des Quatre communes.',
      id_pays :10

    },
      {
        _id: 4,
        libelle : 'Senegal Emergeant',
        contenu :' Avec la Révolution industrielle, la France désirait construire un chemin de fer afin de les relier et entra ' +
        'en conflit avec le Damel du Cayor, Lat Dior. Ce conflit permit à la France de faire officiellement du Cayor un protectorat' +
        ' en 1886, un an après la fin de la conférence de Berlin. La colonisation de l\'ensemble de l\'Afrique de l\'Ouest est alors' +
        ' amorcée et Saint Louis, puis Dakar deviendront les deux capitales successives de l\'Afrique-Occidentale française' +
        ' créée en 1895. Dakar devient ensuite la capitale de la République sénégalaise au moment de l\'indépendance en 1960.',
         id_pays :10

      },

  )
  .then(() => {
        console.log('finished populating Documentations');
      });
  })
Agenda.find({}).remove()
  .then(()=>{
    Agenda.create(
      {
        _id: 1,
        contenu : 'Le Sénégal, en forme longue la République du Sénégal, est un pays d\'Afrique de l\'Ouest.' +
        ' Il est bordé par l\'océan Atlantique à l\'ouest, la Mauritanie au nord, à l\'est par le Mali, la Guinée' +
        ' et la Guinée-Bissau au sud. La Gambie forme une quasi-enclave dans le Sénégal, pénétrant à plus de 300 km à ' +
        'l\'intérieur des terres. Les îles du Cap-Vert sont situées à 560 km de la côte sénégalaise. ' ,
        id_pays :10

      },
      {
        _id: 2,
        contenu : 'Le pays doit son nom au fleuve qui le borde à l\'est et au nord et qui prend sa source dans le Fouta Djallon ' +
        'en Guinée. Le climat est tropical et sec avec deux saisons : la saison sèche et la saison des pluies.' +
        ' L\'actuel territoire du Sénégal a vu se développer plusieurs royaumes dont le Djolof, vassaux des empires successifs du Ghana,' +
        ' du Mali et Songhaï. Après 1591, il subit le morcellement politique ouest-africain consécutif à la bataille de Tondibi.' ,
        id_pays :10

      },
      {
        _id: 3,
        contenu : ' Au xviie siècle, plusieurs comptoirs appartenant à différents empires coloniaux Européens s\'établissent ' +
        'le long de la côte, ils servent de support au commerce triangulaire. La France prend peu à peu l\'ascendant sur les autres' +
        ' puissances puis érige Saint-Louis, Gorée, Dakar et Rufisque en communes françaises régies selon le statut des Quatre communes.',
        id_pays :10

      },
      {
        _id: 4,
        contenu :' Avec la Révolution industrielle, la France désirait construire un chemin de fer afin de les relier et entra ' +
        'en conflit avec le Damel du Cayor, Lat Dior. Ce conflit permit à la France de faire officiellement du Cayor un protectorat' +
        ' en 1886, un an après la fin de la conférence de Berlin. La colonisation de l\'ensemble de l\'Afrique de l\'Ouest est alors' +
        ' amorcée et Saint Louis, puis Dakar deviendront les deux capitales successives de l\'Afrique-Occidentale française' +
        ' créée en 1895. Dakar devient ensuite la capitale de la République sénégalaise au moment de l\'indépendance en 1960.',
        id_pays :10

      },

    )
      .then(() => {
        console.log('finished populating Agendas');
      });
  })

Theme.find({}).remove()
  .then(() => {
    Theme.create(
      {
        _id: 1,
        libelle: 'Leadership, Gouvernance et Culture de l’Emergence',
        mot_introduction: 'Section d’introduction VGN',
        link:'leadership'
      }, {
        _id: 2,
        libelle: 'Action et Coordination du Gouvernement',
        mot_introduction: 'Section d’introduction EL',
        link:'action'
      }, {
        _id: 3,
        libelle: 'Moteurs de croissance',
        mot_introduction: 'Section d’introduction ',
        link:'moteur'
      }, {
        _id: 4,
        libelle: 'Secteurs Supports',
        mot_introduction: 'Section d’introduction ND',
        link:'secteur'
      }, {
        _id: 5,
        libelle: 'Développement des Entreprises',
        mot_introduction: 'Section d’introduction MF',
        link:'developpement'
      }
    ).then(() => {
      console.log('finished populating Themes');
    });
  });


Partie.find({}).remove()
  .then(() => {
    Partie.create({
        _id: 1,
        libelle: 'Planification, priorisation et implémentation',
        section_dintro: 'Section d’introduction ND',
        id_theme: 2
      }, {
        _id: 2,
        libelle: 'Financement',
        section_dintro: 'Section d’introduction Babacar',
        id_theme: 2
      }, {
        _id: 3,
        libelle: 'Suivi  et Evaluation de Projet',
        section_dintro: 'Section d’introduction ND',
        id_theme: 2
      }, {
        _id: 4,
        libelle: 'Secteurs de services',
        section_dintro: 'Section d’introduction BABACAR',
        id_theme: 4
      }, {
        _id: 5,
        libelle: 'Secteurs Sociaux',
        section_dintro: 'Section d’introduction PAUL GINIES',
        id_theme: 4
      }
    ).then(() => {
      console.log('finished populating Parties');
    });
  });

EtudeDeCas.find({}).remove()
  .then(() => {
    EtudeDeCas.create({
      contenu: 'Rwanda – Programmation & mise en œuvre du plan d’émergence > AJM/MF',
      id_partie: 1
    }, {
      contenu: '- Senegal : Filière riz > ND',
      id_theme: 3,
    }, {
      contenu: 'Gabon : Gestion Capital Naturel  > DSK / EL',
      id_theme: 1,
    }).then(() => {
      console.log('finished populating Etudes de Cas');
    });
  });


Fiche.find({}).remove()
  .then(() => {
    Fiche.create({
      contenu: 'Plans d’Emergence de la vision à l’action',
      id_theme: 1
    }, {
      contenu: 'Fiche Bonne Pratique : Tourisme > AK/HB',
      id_theme: 3
    }).then(() => {
      console.log('finished populating Fiche');
    });
  });



Article.find({}).remove()
  .then(() => {
    Article.create(
      {
        contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
        id_theme: 1,
      },
      {
        contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
        id_theme: 1,
      },
      {
        contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
        id_theme: 1,
      },
      {
        contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
        id_theme: 1,
      },
      {
        contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
        id_theme: 1,
      });
  });

Actualite.find({}).remove()
  .then(() => {
    Actualite.create({
      _id: 1,
      libelle: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
      sujet: 'Crise de Gambie'
    }, {
      _id: 2,
      libelle: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
      sujet: 'Crise de Mali'
    });
  });

FicheActualite.find({}).remove()
  .then(() => {
    FicheActualite.create({
        _id: 1,
        id_pays: 10,
        id_actualite: 1,
        date: '2017-01-01'
      },
      {
        _id: 2,
        id_pays: 10,
        id_actualite: 2,
        date: '2017-01-01'
      });
  });

Pays.find({}).remove()
  .then(() => {
    Pays.create({
      _id: 1,
      nom: 'BOTSWANA'
    }, {
      _id: 2,
      nom: 'CAP-VERT'
    }, {
      _id: 3,
      nom: 'CÔTE D\'IVOIRE'
    }, {
      _id: 4,
      nom: 'ETHIOPIE'
    }, {
      _id: 5,
      nom: 'GABON'
    }, {
      _id: 6,
      nom: 'GUINEE EQUATORIAL'
    }, {
      _id: 7,
      nom: 'KENYA'
    }, {
      _id: 8,
      nom: 'MAUDICE'
    }, {
      _id: 9,
      nom: 'RWANDA'
    }, {
      _id: 10,
      nom: 'SENEGAL'
    }, {
      _id: 11,
      nom: 'SOUTH AFRICA'
    }, {
      _id: 12,
      nom: 'TANZANIE'
    },);
  });

User.find({}).remove()
  .then(() => {
    User.create({
      _id : '587f54a347ea262b686ecc5f',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      _id : '587f54a347ea262b686ecc5e',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    },{
      _id : '587f5a2908c8482cf40bb351',
      provider: 'local',
      name: 'pach',
      email: 'adfmin@exmple.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

  Sujet.find({}).remove()
  .then(() => {
    Sujet.create({
      _id : 1,
  titre : 'La fonte des glaciers',
  id_user : '587f54a347ea262b686ecc5f',
  date_creation : '2017-04-01'
    },{
      _id : 2,
  titre : 'La fonte des neiges',
  id_user : '587f54a347ea262b686ecc5f',
  date_creation : '2017-04-01'
    });
  });


 Interview.find({}).remove()
  .then(() => {
    Interview.create({
  _id : 1,
  libelle: 'Emergence Insights Interview de M. Thierno Seydou Nourou Sy',
  intervenant: 'M. Thierno Seydou Nourou Sy',
  contenu:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.`,
   id_theme:1,
   imag: '../../client/assets/images/perfstock/nouveautes/fait_bon_chez_soi.jpg',
},{
  _id : 2,
  libelle: 'Emergence Insights Interview de M.  Victor Gorom Ndiaye',
  intervenant: 'M. Victor Gorom Ndiaye',
  contenu:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.`,
   id_theme:2,
   imag: '../../client/assets/images/perfstock/experts/victor_gorom_ndiaye.jpg',
});
  });


Question.find({}).remove()
  .then(() => {
    Question.create({
  _id : 1,
  titre : `PG : Le développement d'un secteur privé fort passe par de bons canaux de financement des entreprises. Votre partenariat avec le FONSIS et le FONGIP constitue un modèle innovant d'accompagnement des entreprises ; pouvez-vous présenter le contexte sénégalais en la matière et le contexte de création de la BNDE ?`,
  id_interview :1,
},{
  _id : 2,
  titre : `PG : En 2 ans d'existence, quels sont les résultats à ce jour et comment jugez-vous l'efficacité de votre action et votre impact socio-économique ?`,
  id_interview :1,
},{
  _id : 3,
  titre : `PG : La BNDE propose-t-elle un service post-financement ?`,
  id_interview :1,
},{
  _id : 4,
  titre : `PG : Quels sont les principaux défis auxquels votre structure fait face ?`,
  id_interview :1,
},{
  _id : 5,
  titre : `PG : Quelles sont, selon vous, les bonnes pratiques indispensables à la réussite d'une banque de développement en Afrique?`,
  id_interview :1,
},{
  _id : 6,
  titre : `PG : Est-ce que vous avez à ce jour développer des moyens de mobilisation de l’épargne nationale, comme c’est le cas par exemple au Rwanda ?`,
  id_interview :1,
},{
  _id : 7,
  titre : `PG : Le développement d'un secteur privé fort passe par de bons canaux de financement des entreprises. Votre partenariat avec le FONSIS et le FONGIP constitue un modèle innovant d'accompagnement des entreprises ; pouvez-vous présenter le contexte sénégalais en la matière et le contexte de création de la BNDE ?`,
  id_interview :2,
},{
  _id : 8,
  titre : `PG : En 2 ans d'existence, quels sont les résultats à ce jour et comment jugez-vous l'efficacité de votre action et votre impact socio-économique ?`,
  id_interview :2,
},{
  _id : 9,
  titre : `PG : La BNDE propose-t-elle un service post-financement ?`,
  id_interview :2,
},{
  _id : 10,
  titre : `PG : Quels sont les principaux défis auxquels votre structure fait face ?`,
  id_interview :2,
},{
  _id : 11,
  titre : `PG : Quelles sont, selon vous, les bonnes pratiques indispensables à la réussite d'une banque de développement en Afrique?`,
  id_interview :2,
},{
  _id : 12,
  titre : `PG : Est-ce que vous avez à ce jour développer des moyens de mobilisation de l’épargne nationale, comme c’est le cas par exemple au Rwanda ?`,
  id_interview :2,
});
  });

Reponse.find({}).remove()
  .then(() => {
    Reponse.create({
  _id : 1,
  libelle : `TSNS : La Banque Nationale pour le Développement Economique (BNDE) a été créée officiellement en 2010 mais il s’agit d’un projet en germe depuis 2006. L’idée à l’époque était de transformer le Fonds de Promotion Economique (FPE) en banque. Entre 2010 à 2012, le projet a peiné à démarrer du fait de tiraillements entre la conservation de la FPE (qui allait au-delà de ses prérogatives en proposant des crédits directs) ou la création de la BNDE.

A l’arrivée au pouvoir du Président Macky Sall, le projet a été repris en mains, avec une réflexion forte sur le modèle pour régler le problème de financement des entreprises au Sénégal, et notamment des PME. Beaucoup d'études ont montré ces difficultés d’accès au financement auxquelles font face les PME. Malgré leur poids dans l'économie (80% du tissu économique), les PME ne contribuent qu'à 29% du PIB ; une croissance économique forte, durable et inclusive ne peut être obtenue sans appui à leur développement, et cela passe entre autres par le financement. Les principaux freins identifiés pour l’accès au financement des PME sont : i) le manque de garantie, ii) la faiblesse de structuration des PME (business plan …), iii) l'environnement judiciaire, et iv) les taux d'intérêt (qui ne constitue pas selon moi un frein réel). Il a aussi été ressorti que malgré la multitude de banques présentes sur le territoire, les PME représentent seulement 16% du portefeuille-clients à l’échelle nationale. Les PME non formalisées sont laissées de côté par le système bancaire car les types de financement proposés ne sont pas adaptés à leurs besoins.
Ainsi en 2012, sous la présidence de Macky Sall, le modèle de la Banque a été repensé avec pour objectif d'avoir un instrument permettant un financement inclusif. Il fallait également constituer un modèle qui rassure et donne de l'assurance à la Banque, notamment en matière de couverture des risques. Ces réflexions ont mené à la création du Fonds de Garantie des Investissements Prioritaires (FONGIP), qui apporte des garanties à la BNDE. Les PME sont également confrontées à des problèmes d'insuffisance de fonds propres, d’où la création du Fonds Souverain d’Investissements Stratégiques (FONSIS), un fonds souverain devant prendre en compte les besoins structurants du pays, avec un sous-fonds dédié au PME. Le FONSIS permet ainsi de jouer sur le scoring de la PME.
Pour résumer, la BNDE a été créée pour participer activement au financement des PME, avec un objectif de 60% de PME dans le portefeuille-clients. Actuellement, leur part est à 53% dans notre portefeuille-clients. L'actionnaire de référence de la Banque est l'Etat du Sénégal, et elle a été créée et est gérée exclusivement avec l’appui d’experts locaux.

Le mécanisme BNDE-FONSIS-FONGIP représente, comme vous l’avez dit, un modèle innovant d’accès au financement pour les PME. Mais ces dernières ne constituent pas un élément isolé dans l’écosystème du privé ; notre ambition ne se limite donc pas exclusivement à ces Petites et Moyennes Entreprises mais vise aussi à capter les capitaux des grandes entreprises (qui pour certaines finançaient des PME). Ces grandes entreprises représentant des marchés pour les PME, notamment en matière de sous-traitance, il est tout à fait logique et intéressant de les intégrer dans notre démarche. Il faut aussi noter que certaines structures telles que les pharmacies ou les cabinets d’avocats, qui sont aussi des PME, sont souvent laissées de côté. Elles sont aussi prises en charge dans notre démarche. Accompagner les PME, c'est aussi adapter nos produits aux salariés de ces entreprises en proposant par exemple des crédits de consommation, des crédits immobiliers, etc. L’idée est donc de migrer d’une offre classique de financement pour aller vers le crédit-bail, la finance islamique etc., afin d’ouvrir de nouvelles perspectives tout en mettant en place de meilleurs mécanismes de gestion des risques.

A cet effet, un calendrier 2013-2018 avait été adopté mais n’a pu être mis en œuvre dans son intégralité car dès le début de ses activités, la Banque a été submergée d’entreprises ayant des besoins spécifiques, de porteurs de projets, etc. Mais la période 2013-2016 a tout de même été fructueuse avec par exemple la signature de nombreuses conventions avec des structures d'appui non-financier, telles que l’Agence de Développement et d’Encadrement des PME (ADEPME), qui apportent leur expertise à la Banque et aux entreprises que nous accompagnons. Le Business Plan 2018-2021 a été récemment validé. Le crédit-bail est en cours de développement et sera intégré à nos offres d’ici deux (2) ans afin d’accompagner les entreprises qui veulent améliorer leurs capacités de financement et croître, leur permettre d’avoir une visibilité sur le moyen et le long terme, et préfinancer leurs besoins futurs. Il en est de même pour la finance islamique qui elle sera intégrée dans trois (3) ans. L'autre objectif est de continuer à financer le fonds de roulement à l'exportation des PME et d’accroître notre impact sur le tissu socio-économique sénégalais.`,
  id_question : 1,
},{
  _id : 2,
  libelle : `TSNS : En deux (2) ans, nous avons plus que triplé notre total bilan qui est passé de 30 milliards F CFA à 100 milliards F CFA, et nous avons multiplié par trois (3) notre portefeuille-clients avec de plus en plus de sénégalais et d’entreprises qui nous font confiance et déposent leur argent dans notre banque. A ce jour, nous avons six mille (6000) clients sur tout le territoire, dont 53% sont des PME. En 2017, ce nombre sera doubler grâce aux PME mais aussi à l’attrait de nouveaux particuliers. En février 2017, nous aurons onze (11) agences réparties sur une bonne partie du territoire. Nous sommes aujourd’hui présents à Saint-Louis, Thiès, Ziguinchor, Touba, Kaolack, Ourossogui, Podor et bien sûr Dakar. L'année 2017 verra l’extension de notre réseau dans le Sud du pays, notamment dans la région de Sédhiou. Notre ambition est d’utiliser les nouvelles technologies pour un maillage plus constructif, avec la mise en place d'un système financier basé sur le wallet (banque digitale). En deux (2) ans, la BNDE s’est également mise à niveau en termes d'offre financière avec à ce jour toutes les possibilités liées à la monétique (compte avec carte de paiement, de retrait, prépayé, agréé Visa et MasterCard), au sms banking et au e-banking. Une politique de communication visant à assurer la visibilité de la Banque a également été mise en œuvre et sera renforcée en 2017.

Concernant le financement, deux volets ont été développés en 2016 : i) le financement d’entreprises ayant des besoins classiques d’exploitation avec, en bilan et hors-bilan le financement de plus de 300 entreprises pour un flux de plus de soixante-dix (70) milliards, ii) et le financement d’investissement menant à la création d'entreprises. Nous avons également participé au financement de l'Etat du Sénégal par le lancement des emprunts obligataires et le lancement des bons du Trésor de l’Etat. En outre, nous accompagnons des institutions de microfinance pour en faire nos relais auprès des microentreprises qui ne devraient pas être laissées hors du système bancaire et devraient aussi pouvoir bénéficier de possibilités de financement car constituant l’une des bases de développement du secteur privé.
Ainsi, trois (3) milliards de financement ont permis la création d'environ deux mille (2 000) emplois en 2016. En effet lorsque nous investissons dans une PME, nous disposons de l’effectif initial et du supplément d'effectif induit par le financement, ce qui nous permet de mesurer notre impact sur le marché du travail. Depuis sa création, la BNDE en est donc à environ cinq mille (5 000) emplois créés, avec la consolidation et la création d'entreprises.
Mais selon moi, ce qu'il reste à faire est encore plus important car nous évoluons dans un environnement quasi-vierge où les besoins sont énormes. La BNDE se veut un catalyseur dans son écosystème socio-économique et bancaire. A notre arrivée sur le marché, le secteur agricole n’était accompagné par les banques qu’à hauteur de 3% ; aujourd’hui il représente 21% du portefeuille de la BNDE, avec l’appui de partenaires tels que la Caisse Nationale de Crédit Agricole du Sénégal (CNCAS). Il s’agit donc de pousser les banques à s’intéresser et à investir dans des secteurs stratégiques laisser de côté, en prenant le lead et en montrant l’exemple : par exemple à travers l’accompagnement de filières porteuses (anacarde, arachide, riz) par le financement de la production, mais aussi en investissant dans la transformation. Nos interventions ont permis à certains opérateurs d'investir dans la transformation, boostant ainsi l’économie locale grâce au besoin de main d’œuvre, mais aussi à la consommation par les sénégalais de denrées locales (e.g. le riz de la vallée). Cela constitue aussi l’un des objectifs de la BNDE : permettre aux entreprises de ne pas se limiter à l’exportation de matières premières mais aussi de transformer ces matières premières localement, créant ainsi une plus-value. 
 En termes de perspectives, il y a quand même des améliorations à apporter. La banque a été démarrée avec nos propres moyens technologiques et organisationnels, en se basant sur l’expérience que nous avons, sans l’appui d’aucune structure internationale mais plutôt avec des experts nationaux. Aujourd'hui, un besoin d'accompagnement se fait ressentir afin d’optimiser le système et les ressources en interne, avec pour ambition d’être plus performant. Il faudrait aussi un accompagnement beaucoup plus fort de la part des institutionnels, notamment l’Etat du Sénégal, en termes de ressources pour nous permettre de mieux nous positionner sur certains secteurs stratégiques comme le veut notre mission. Concernant les PME, malgré ce qui a été fait jusqu’ici, il y a parfois des entreprises se présentant avec des projets peu viables et des promoteurs douteux malgré leurs gages de bonne foi, ce qui laisse des ardoises et pousse la Banque a usé de ses garanties pour recouvrer et gérer le contentieux. Les usagers doivent comprendre que la Banque est là pour participer au développement du pays et améliorer leur quotidien ; de fait, la pérennité de la banque dépend du respect de leurs engagements. Il faut donc plus de sérieux, plus d’«esprit patriotique » comme j’aime à l’appeler, et c’est quelque chose qui est en train de se développer.`,
  id_question : 2,
},{
  _id : 3,
  libelle : `TSNS : Tout d’abord, il y a plusieurs types de PME. Au début, nous avons accompagné celles qui ne travaillent que sur la base de financement de marchés ; nous les avons accompagné dans la création, les avons aidé à grandir. Une fois un certain niveau atteint, la plupart de ces entreprises ont tendance à investir dans l’immobilier, chose que la BNDE a voulu éviter. A la place, nous invitons la PME à investir dans le matériel. Grâce à notre action, beaucoup de sociétés ont ainsi renforcé leurs capacités.

Deux approches sont possibles: soit la PME sent un besoin de se réformer et de passer à un stade supérieur et nous sollicite,  soit la BNDE elle-même voit un potentiel de développement et propose son accompagnement. Quand la Banque voit par exemple que le poste ‘location de matériel’ est très lourd, elle suggère à l’entreprise qui en a les moyens d'investir dans l’achat de matériel.

En outre, du fait du fort potentiel du marché, les entreprises sont aujourd’hui dans une boulimie d'investissement au risque parfois de s’engager sans réellement maîtriser le marché. Nous jouons aussi ce rôle de régulateur car avec le PSE, les marchés (de sous-traitance et directs) existent, mais tout investissement doit être effectué avec prudence, en maîtrisant toutes les données du marché. Nous avons la chance d’être dans un pays avec une visibilité jusqu’en 2035 sur les projets à mener, qui sont déjà bien ficelés. Il faut que les grands opérateurs et le secteur privé en général se positionne dans cette perspective. Selon moi, il ne s’agit pas d’un problème de ressources, car la BNDE est là et peut mobiliser les ressources nécessaires, mais plutôt de capacités. Par exemple, nous allons bientôt accompagner une société sénégalaise qui a gagné un marché dans le cadre du PSE et financée localement dans le cadre d’un PPP. Il ne s’agit donc pas d’un problème de ressources mais plutôt d’aller chercher l'expertise et d’ensuite s’assurer du transfert de compétences, comme ce sera par exemple le cas dans le projet de Train Express Régional Dakar-AIBD. C’est ainsi que l’on construit un pays, et la Chine en est un exemple.`,
  id_question : 3,
},{
  _id : 4,
  libelle : `Les deux principaux défis auxquels nous faisons face sont la faiblesse l'accompagnement institutionnel et  le manque d'appropriation de la vision stratégique.

En tant que Banque de développement, même soumise à la même règlementation que les autres banques commerciales, nous devons spécifiquement apporter des réponses à la question du financement des PME, en tenant compte des contraintes règlementaires, mais aussi des besoins de ces PME. La règlementation gagnerait donc à être adaptée et être beaucoup plus souple comme dans certains pays tels que la Malaisie : par exemple en permettant des collatéraux spéciaux et des maturités plus longues (de l’ordre de douze (12) ans pour les Banques de développement en Malaisie). La maturité de cinq (5) ans aujourd’hui existante est largement insuffisante considérant qu’il faut déjà deux (2) ans pour qu'une entreprise se structure dans son intégralité, voire trois (3) ans avec quelques aléas externes non prévus dans le business plan. Il restera alors deux (2) ans à l’entreprise pour payer, ce qui est impossible ; et c’est ce qui crée des problèmes de contentieux, de déclassement des créances, etc. Il faut donc plus de souplesse dans la règlementation car une banque de développement n’a pas les mêmes contraintes qu’une banque commerciale.

Parallèlement, ceux qui entrent dans la gouvernance de la BNDE doivent également savoir que la rentabilité économique, l’impact socio-économique est plus attendu que la rentabilité financière, qui sera tout de même au rendez-vous et permet de maintenir les grands équilibres. Les banques de développement, en Afrique du Sud, au Brésil, en Malaisie, favorisent une émulation économique qui permet à tous les acteurs de progresser. La PME était exclue car risquée. La banque devant aller vers des cibles risquées (PME, secteur agricole), il faut des collatéraux fonctionnels, adapté, mais aussi des maturités plus longues et de l’audace ainsi qu’une vision commune du développement en termes de gouvernance, avec encore une fois les mécanismes adéquats de gestion des risques.`,
  id_question : 4,
},{
  _id : 5,
  libelle : `Dans le Business Plan 2017-2021 qui va être proposé, un benchmark des autres banques de développement a été réalisé, essentiellement en Asie (Malaisie) et en Amérique Latine (Brésil). Dans ces pays, tous les projets de développement se font autour de ces banques. L'Etat, dans le cadre de sa stratégie de développement, intègre les besoins de développement des PME dans son budget pour en faire un levier de développement. Les ressources sont mises à disposition de la banque nationale de développement du pays qui, derrière, a un contrat de performance devant garantir son impact sur le développement des PME, l’augmentation du taux de croissance du pays, et un contrôle de l’Etat sur ses activités. Ce schéma permet d’avoir des maturités longues, des taux d'intérêt très faibles, et facilite le financement de secteurs porteurs, dynamiques et créateurs d'emplois. Nous nous sommes donc inspirés de ces modèles de façon objective.

Une banque de développement ne pouvant fonctionner comme une banque privée, la présence de l'Etat est indispensable, mais toujours dans la bonne gouvernance afin de garantir la confiance des clients et des investisseurs.`,
  id_question : 5,
},{
  _id : 6,
  libelle : `Aujourd’hui les produits d'épargne proposés sont classiques et réglementés par la BCEAO, avec un niveau plafonné au-delà duquel c'est fiscalisé. Nous proposons également des plans d’épargne logement. Mais il fallait innover et proposer un produit adossé au marché financier de la sous-région, basé à Abidjan. Un Fonds Commun de Placement a donc été lancé et, en partenariat avec CGF Bourse, le produit sera commercialisé en Mars 2017, à 1000 francs, et sera accessible à tous les citoyens sénégalais. Ce titre sera rémunéré et pourra être revendu par son détenteur grâce à la constitution d'un marché secondaire. Ce sera un excellent moyen de collecter l'épargne avec une approche beaucoup plus inclusive et une rentabilité forte. Les détenteurs de titres seront également informés de l’allocation de leur placement.`,
  id_question : 6,
},{
  _id : 7,
  libelle : `TSNS : La Banque Nationale pour le Développement Economique (BNDE) a été créée officiellement en 2010 mais il s’agit d’un projet en germe depuis 2006. L’idée à l’époque était de transformer le Fonds de Promotion Economique (FPE) en banque. Entre 2010 à 2012, le projet a peiné à démarrer du fait de tiraillements entre la conservation de la FPE (qui allait au-delà de ses prérogatives en proposant des crédits directs) ou la création de la BNDE.

A l’arrivée au pouvoir du Président Macky Sall, le projet a été repris en mains, avec une réflexion forte sur le modèle pour régler le problème de financement des entreprises au Sénégal, et notamment des PME. Beaucoup d'études ont montré ces difficultés d’accès au financement auxquelles font face les PME. Malgré leur poids dans l'économie (80% du tissu économique), les PME ne contribuent qu'à 29% du PIB ; une croissance économique forte, durable et inclusive ne peut être obtenue sans appui à leur développement, et cela passe entre autres par le financement. Les principaux freins identifiés pour l’accès au financement des PME sont : i) le manque de garantie, ii) la faiblesse de structuration des PME (business plan …), iii) l'environnement judiciaire, et iv) les taux d'intérêt (qui ne constitue pas selon moi un frein réel). Il a aussi été ressorti que malgré la multitude de banques présentes sur le territoire, les PME représentent seulement 16% du portefeuille-clients à l’échelle nationale. Les PME non formalisées sont laissées de côté par le système bancaire car les types de financement proposés ne sont pas adaptés à leurs besoins.
Ainsi en 2012, sous la présidence de Macky Sall, le modèle de la Banque a été repensé avec pour objectif d'avoir un instrument permettant un financement inclusif. Il fallait également constituer un modèle qui rassure et donne de l'assurance à la Banque, notamment en matière de couverture des risques. Ces réflexions ont mené à la création du Fonds de Garantie des Investissements Prioritaires (FONGIP), qui apporte des garanties à la BNDE. Les PME sont également confrontées à des problèmes d'insuffisance de fonds propres, d’où la création du Fonds Souverain d’Investissements Stratégiques (FONSIS), un fonds souverain devant prendre en compte les besoins structurants du pays, avec un sous-fonds dédié au PME. Le FONSIS permet ainsi de jouer sur le scoring de la PME.
Pour résumer, la BNDE a été créée pour participer activement au financement des PME, avec un objectif de 60% de PME dans le portefeuille-clients. Actuellement, leur part est à 53% dans notre portefeuille-clients. L'actionnaire de référence de la Banque est l'Etat du Sénégal, et elle a été créée et est gérée exclusivement avec l’appui d’experts locaux.

Le mécanisme BNDE-FONSIS-FONGIP représente, comme vous l’avez dit, un modèle innovant d’accès au financement pour les PME. Mais ces dernières ne constituent pas un élément isolé dans l’écosystème du privé ; notre ambition ne se limite donc pas exclusivement à ces Petites et Moyennes Entreprises mais vise aussi à capter les capitaux des grandes entreprises (qui pour certaines finançaient des PME). Ces grandes entreprises représentant des marchés pour les PME, notamment en matière de sous-traitance, il est tout à fait logique et intéressant de les intégrer dans notre démarche. Il faut aussi noter que certaines structures telles que les pharmacies ou les cabinets d’avocats, qui sont aussi des PME, sont souvent laissées de côté. Elles sont aussi prises en charge dans notre démarche. Accompagner les PME, c'est aussi adapter nos produits aux salariés de ces entreprises en proposant par exemple des crédits de consommation, des crédits immobiliers, etc. L’idée est donc de migrer d’une offre classique de financement pour aller vers le crédit-bail, la finance islamique etc., afin d’ouvrir de nouvelles perspectives tout en mettant en place de meilleurs mécanismes de gestion des risques.

A cet effet, un calendrier 2013-2018 avait été adopté mais n’a pu être mis en œuvre dans son intégralité car dès le début de ses activités, la Banque a été submergée d’entreprises ayant des besoins spécifiques, de porteurs de projets, etc. Mais la période 2013-2016 a tout de même été fructueuse avec par exemple la signature de nombreuses conventions avec des structures d'appui non-financier, telles que l’Agence de Développement et d’Encadrement des PME (ADEPME), qui apportent leur expertise à la Banque et aux entreprises que nous accompagnons. Le Business Plan 2018-2021 a été récemment validé. Le crédit-bail est en cours de développement et sera intégré à nos offres d’ici deux (2) ans afin d’accompagner les entreprises qui veulent améliorer leurs capacités de financement et croître, leur permettre d’avoir une visibilité sur le moyen et le long terme, et préfinancer leurs besoins futurs. Il en est de même pour la finance islamique qui elle sera intégrée dans trois (3) ans. L'autre objectif est de continuer à financer le fonds de roulement à l'exportation des PME et d’accroître notre impact sur le tissu socio-économique sénégalais.`,
  id_question : 7,
},{
  _id : 8,
  libelle : `TSNS : En deux (2) ans, nous avons plus que triplé notre total bilan qui est passé de 30 milliards F CFA à 100 milliards F CFA, et nous avons multiplié par trois (3) notre portefeuille-clients avec de plus en plus de sénégalais et d’entreprises qui nous font confiance et déposent leur argent dans notre banque. A ce jour, nous avons six mille (6000) clients sur tout le territoire, dont 53% sont des PME. En 2017, ce nombre sera doubler grâce aux PME mais aussi à l’attrait de nouveaux particuliers. En février 2017, nous aurons onze (11) agences réparties sur une bonne partie du territoire. Nous sommes aujourd’hui présents à Saint-Louis, Thiès, Ziguinchor, Touba, Kaolack, Ourossogui, Podor et bien sûr Dakar. L'année 2017 verra l’extension de notre réseau dans le Sud du pays, notamment dans la région de Sédhiou. Notre ambition est d’utiliser les nouvelles technologies pour un maillage plus constructif, avec la mise en place d'un système financier basé sur le wallet (banque digitale). En deux (2) ans, la BNDE s’est également mise à niveau en termes d'offre financière avec à ce jour toutes les possibilités liées à la monétique (compte avec carte de paiement, de retrait, prépayé, agréé Visa et MasterCard), au sms banking et au e-banking. Une politique de communication visant à assurer la visibilité de la Banque a également été mise en œuvre et sera renforcée en 2017.

Concernant le financement, deux volets ont été développés en 2016 : i) le financement d’entreprises ayant des besoins classiques d’exploitation avec, en bilan et hors-bilan le financement de plus de 300 entreprises pour un flux de plus de soixante-dix (70) milliards, ii) et le financement d’investissement menant à la création d'entreprises. Nous avons également participé au financement de l'Etat du Sénégal par le lancement des emprunts obligataires et le lancement des bons du Trésor de l’Etat. En outre, nous accompagnons des institutions de microfinance pour en faire nos relais auprès des microentreprises qui ne devraient pas être laissées hors du système bancaire et devraient aussi pouvoir bénéficier de possibilités de financement car constituant l’une des bases de développement du secteur privé.
Ainsi, trois (3) milliards de financement ont permis la création d'environ deux mille (2 000) emplois en 2016. En effet lorsque nous investissons dans une PME, nous disposons de l’effectif initial et du supplément d'effectif induit par le financement, ce qui nous permet de mesurer notre impact sur le marché du travail. Depuis sa création, la BNDE en est donc à environ cinq mille (5 000) emplois créés, avec la consolidation et la création d'entreprises.
Mais selon moi, ce qu'il reste à faire est encore plus important car nous évoluons dans un environnement quasi-vierge où les besoins sont énormes. La BNDE se veut un catalyseur dans son écosystème socio-économique et bancaire. A notre arrivée sur le marché, le secteur agricole n’était accompagné par les banques qu’à hauteur de 3% ; aujourd’hui il représente 21% du portefeuille de la BNDE, avec l’appui de partenaires tels que la Caisse Nationale de Crédit Agricole du Sénégal (CNCAS). Il s’agit donc de pousser les banques à s’intéresser et à investir dans des secteurs stratégiques laisser de côté, en prenant le lead et en montrant l’exemple : par exemple à travers l’accompagnement de filières porteuses (anacarde, arachide, riz) par le financement de la production, mais aussi en investissant dans la transformation. Nos interventions ont permis à certains opérateurs d'investir dans la transformation, boostant ainsi l’économie locale grâce au besoin de main d’œuvre, mais aussi à la consommation par les sénégalais de denrées locales (e.g. le riz de la vallée). Cela constitue aussi l’un des objectifs de la BNDE : permettre aux entreprises de ne pas se limiter à l’exportation de matières premières mais aussi de transformer ces matières premières localement, créant ainsi une plus-value. 
 En termes de perspectives, il y a quand même des améliorations à apporter. La banque a été démarrée avec nos propres moyens technologiques et organisationnels, en se basant sur l’expérience que nous avons, sans l’appui d’aucune structure internationale mais plutôt avec des experts nationaux. Aujourd'hui, un besoin d'accompagnement se fait ressentir afin d’optimiser le système et les ressources en interne, avec pour ambition d’être plus performant. Il faudrait aussi un accompagnement beaucoup plus fort de la part des institutionnels, notamment l’Etat du Sénégal, en termes de ressources pour nous permettre de mieux nous positionner sur certains secteurs stratégiques comme le veut notre mission. Concernant les PME, malgré ce qui a été fait jusqu’ici, il y a parfois des entreprises se présentant avec des projets peu viables et des promoteurs douteux malgré leurs gages de bonne foi, ce qui laisse des ardoises et pousse la Banque a usé de ses garanties pour recouvrer et gérer le contentieux. Les usagers doivent comprendre que la Banque est là pour participer au développement du pays et améliorer leur quotidien ; de fait, la pérennité de la banque dépend du respect de leurs engagements. Il faut donc plus de sérieux, plus d’«esprit patriotique » comme j’aime à l’appeler, et c’est quelque chose qui est en train de se développer.`,
  id_question : 8,
},{
  _id : 9,
  libelle : `TSNS : Tout d’abord, il y a plusieurs types de PME. Au début, nous avons accompagné celles qui ne travaillent que sur la base de financement de marchés ; nous les avons accompagné dans la création, les avons aidé à grandir. Une fois un certain niveau atteint, la plupart de ces entreprises ont tendance à investir dans l’immobilier, chose que la BNDE a voulu éviter. A la place, nous invitons la PME à investir dans le matériel. Grâce à notre action, beaucoup de sociétés ont ainsi renforcé leurs capacités.

Deux approches sont possibles: soit la PME sent un besoin de se réformer et de passer à un stade supérieur et nous sollicite,  soit la BNDE elle-même voit un potentiel de développement et propose son accompagnement. Quand la Banque voit par exemple que le poste ‘location de matériel’ est très lourd, elle suggère à l’entreprise qui en a les moyens d'investir dans l’achat de matériel.

En outre, du fait du fort potentiel du marché, les entreprises sont aujourd’hui dans une boulimie d'investissement au risque parfois de s’engager sans réellement maîtriser le marché. Nous jouons aussi ce rôle de régulateur car avec le PSE, les marchés (de sous-traitance et directs) existent, mais tout investissement doit être effectué avec prudence, en maîtrisant toutes les données du marché. Nous avons la chance d’être dans un pays avec une visibilité jusqu’en 2035 sur les projets à mener, qui sont déjà bien ficelés. Il faut que les grands opérateurs et le secteur privé en général se positionne dans cette perspective. Selon moi, il ne s’agit pas d’un problème de ressources, car la BNDE est là et peut mobiliser les ressources nécessaires, mais plutôt de capacités. Par exemple, nous allons bientôt accompagner une société sénégalaise qui a gagné un marché dans le cadre du PSE et financée localement dans le cadre d’un PPP. Il ne s’agit donc pas d’un problème de ressources mais plutôt d’aller chercher l'expertise et d’ensuite s’assurer du transfert de compétences, comme ce sera par exemple le cas dans le projet de Train Express Régional Dakar-AIBD. C’est ainsi que l’on construit un pays, et la Chine en est un exemple.`,
  id_question : 9,
},{
  _id : 10,
  libelle : `Les deux principaux défis auxquels nous faisons face sont la faiblesse l'accompagnement institutionnel et  le manque d'appropriation de la vision stratégique.

En tant que Banque de développement, même soumise à la même règlementation que les autres banques commerciales, nous devons spécifiquement apporter des réponses à la question du financement des PME, en tenant compte des contraintes règlementaires, mais aussi des besoins de ces PME. La règlementation gagnerait donc à être adaptée et être beaucoup plus souple comme dans certains pays tels que la Malaisie : par exemple en permettant des collatéraux spéciaux et des maturités plus longues (de l’ordre de douze (12) ans pour les Banques de développement en Malaisie). La maturité de cinq (5) ans aujourd’hui existante est largement insuffisante considérant qu’il faut déjà deux (2) ans pour qu'une entreprise se structure dans son intégralité, voire trois (3) ans avec quelques aléas externes non prévus dans le business plan. Il restera alors deux (2) ans à l’entreprise pour payer, ce qui est impossible ; et c’est ce qui crée des problèmes de contentieux, de déclassement des créances, etc. Il faut donc plus de souplesse dans la règlementation car une banque de développement n’a pas les mêmes contraintes qu’une banque commerciale.

Parallèlement, ceux qui entrent dans la gouvernance de la BNDE doivent également savoir que la rentabilité économique, l’impact socio-économique est plus attendu que la rentabilité financière, qui sera tout de même au rendez-vous et permet de maintenir les grands équilibres. Les banques de développement, en Afrique du Sud, au Brésil, en Malaisie, favorisent une émulation économique qui permet à tous les acteurs de progresser. La PME était exclue car risquée. La banque devant aller vers des cibles risquées (PME, secteur agricole), il faut des collatéraux fonctionnels, adapté, mais aussi des maturités plus longues et de l’audace ainsi qu’une vision commune du développement en termes de gouvernance, avec encore une fois les mécanismes adéquats de gestion des risques.`,
  id_question : 10,
},{
  _id : 11,
  libelle : `Dans le Business Plan 2017-2021 qui va être proposé, un benchmark des autres banques de développement a été réalisé, essentiellement en Asie (Malaisie) et en Amérique Latine (Brésil). Dans ces pays, tous les projets de développement se font autour de ces banques. L'Etat, dans le cadre de sa stratégie de développement, intègre les besoins de développement des PME dans son budget pour en faire un levier de développement. Les ressources sont mises à disposition de la banque nationale de développement du pays qui, derrière, a un contrat de performance devant garantir son impact sur le développement des PME, l’augmentation du taux de croissance du pays, et un contrôle de l’Etat sur ses activités. Ce schéma permet d’avoir des maturités longues, des taux d'intérêt très faibles, et facilite le financement de secteurs porteurs, dynamiques et créateurs d'emplois. Nous nous sommes donc inspirés de ces modèles de façon objective.

Une banque de développement ne pouvant fonctionner comme une banque privée, la présence de l'Etat est indispensable, mais toujours dans la bonne gouvernance afin de garantir la confiance des clients et des investisseurs.`,
  id_question : 11,
},{
  _id : 12,
  libelle : `Aujourd’hui les produits d'épargne proposés sont classiques et réglementés par la BCEAO, avec un niveau plafonné au-delà duquel c'est fiscalisé. Nous proposons également des plans d’épargne logement. Mais il fallait innover et proposer un produit adossé au marché financier de la sous-région, basé à Abidjan. Un Fonds Commun de Placement a donc été lancé et, en partenariat avec CGF Bourse, le produit sera commercialisé en Mars 2017, à 1000 francs, et sera accessible à tous les citoyens sénégalais. Ce titre sera rémunéré et pourra être revendu par son détenteur grâce à la constitution d'un marché secondaire. Ce sera un excellent moyen de collecter l'épargne avec une approche beaucoup plus inclusive et une rentabilité forte. Les détenteurs de titres seront également informés de l’allocation de leur placement.`,
  id_question : 12,
});
  });

 Message.find({}).remove()
  .then(() => {
    Message.create({
      _id: 1,
  id_user : '587f54a347ea262b686ecc5e',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 2,
  id_user : '587f54a347ea262b686ecc5e',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 3,
  id_user : '587f54a347ea262b686ecc5e',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 4,
  id_user : '587f54a347ea262b686ecc5f',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 5,
  id_user : '587f54a347ea262b686ecc5f',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 6,
  id_user : '587f54a347ea262b686ecc5f',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 7,
  id_user : '587f54a347ea262b686ecc5f',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 8,
  id_user : '587f54a347ea262b686ecc5f',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 9,
  id_user : '587f5a2908c8482cf40bb351',
  id_sujet :1,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 10,
  id_user : '587f5a2908c8482cf40bb351',
  id_sujet :2,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    },{
      _id: 11,
  id_user : '587f5a2908c8482cf40bb351',
  id_sujet :2,
  id_createur : '587f54a347ea262b686ecc5f',
  contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illum impedit, praesentium cumque, vitae est fugit odio explicabo iste consectetur sequi sunt quisquam numquam id commodi tempora quam accusantium officia.
`,
  date_creation: '2017-01-01'
    });
  });
