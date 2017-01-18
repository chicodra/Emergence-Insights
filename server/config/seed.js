/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Theme from "../api/theme/theme.model";
import User from "../api/user/user.model";
import Article from "../api/article/article.model";
import Interview from "../api/interview/interview.model";
import Pays from "../api/pays/pays.model";
import Actualite from "../api/actualite/actualite.model";
import FicheActualite from "../api/fiche_actualite/fiche_actualite.model";
import Fiche from "../api/fiche_de_bonne_pratique/fiche_de_bonne_pratique.model";
import Partie from "../api/partie_theme/partie_theme.model";
import EtudeDeCas from "../api/etude_de_cas/etude_de_cas.model";

Theme.find({}).remove()
  .then(() => {
    Theme.create(
      {
        _id: 1,
        libelle: 'Leadership, Gouvernance et Culture de l’Emergence',
        mot_introduction: 'Section d’introduction VGN'
      }, {
        _id: 2,
        libelle: 'Action et Coordination du Gouvernement',
        mot_introduction: 'Section d’introduction EL'
      }, {
        _id: 3,
        libelle: 'Moteurs de croissance',
        mot_introduction: 'Section d’introduction '
      }, {
        _id: 4,
        libelle: 'Secteurs Supports',
        mot_introduction: 'Section d’introduction ND'
      }, {
        _id: 5,
        libelle: 'Développement des Entreprises',
        mot_introduction: 'Section d’introduction MF'
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
        id_pays: 1,
        id_actualite: 1,
        date: '2017-01-01'
      },
      {
        _id: 2,
        id_pays: 1,
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


Interview.find({}).remove()
  .then(() => {
    Interview.create({
      libelle: 'Emergence Insights Interview de M. Thierno Seydou Nourou Sy ',
      intervenant: 'M. Thierno Seydou Nourou Sy',
      contenu: `PG : Le développement d'un secteur privé fort passe par de bons canaux de financement des entreprises. Votre partenariat avec le FONSIS et le FONGIP constitue un modèle innovant d'accompagnement des entreprises ; pouvez-vous présenter le contexte sénégalais en la matière et le contexte de création de la BNDE ?

TSNS : La Banque Nationale pour le Développement Economique (BNDE) a été créée officiellement en 2010 mais il s’agit d’un projet en germe depuis 2006. L’idée à l’époque était de transformer le Fonds de Promotion Economique (FPE) en banque. Entre 2010 à 2012, le projet a peiné à démarrer du fait de tiraillements entre la conservation de la FPE (qui allait au-delà de ses prérogatives en proposant des crédits directs) ou la création de la BNDE.

A l’arrivée au pouvoir du Président Macky Sall, le projet a été repris en mains, avec une réflexion forte sur le modèle pour régler le problème de financement des entreprises au Sénégal, et notamment des PME. Beaucoup d'études ont montré ces difficultés d’accès au financement auxquelles font face les PME. Malgré leur poids dans l'économie (80% du tissu économique), les PME ne contribuent qu'à 29% du PIB ; une croissance économique forte, durable et inclusive ne peut être obtenue sans appui à leur développement, et cela passe entre autres par le financement. Les principaux freins identifiés pour l’accès au financement des PME sont : i) le manque de garantie, ii) la faiblesse de structuration des PME (business plan …), iii) l'environnement judiciaire, et iv) les taux d'intérêt (qui ne constitue pas selon moi un frein réel). Il a aussi été ressorti que malgré la multitude de banques présentes sur le territoire, les PME représentent seulement 16% du portefeuille-clients à l’échelle nationale. Les PME non formalisées sont laissées de côté par le système bancaire car les types de financement proposés ne sont pas adaptés à leurs besoins.

Ainsi en 2012, sous la présidence de Macky Sall, le modèle de la Banque a été repensé avec pour objectif d'avoir un instrument permettant un financement inclusif. Il fallait également constituer un modèle qui rassure et donne de l'assurance à la Banque, notamment en matière de couverture des risques. Ces réflexions ont mené à la création du Fonds de Garantie des Investissements Prioritaires (FONGIP), qui apporte des garanties à la BNDE. Les PME sont également confrontées à des problèmes d'insuffisance de fonds propres, d’où la création du Fonds Souverain d’Investissements Stratégiques (FONSIS), un fonds souverain devant prendre en compte les besoins structurants du pays, avec un sous-fonds dédié au PME. Le FONSIS permet ainsi de jouer sur le scoring de la PME.

Pour résumer, la BNDE a été créée pour participer activement au financement des PME, avec un objectif de 60% de PME dans le portefeuille-clients. Actuellement, leur part est à 53% dans notre portefeuille-clients. L'actionnaire de référence de la Banque est l'Etat du Sénégal, et elle a été créée et est gérée exclusivement avec l’appui d’experts locaux.

Le mécanisme BNDE-FONSIS-FONGIP représente, comme vous l’avez dit, un modèle innovant d’accès au financement pour les PME. Mais ces dernières ne constituent pas un élément isolé dans l’écosystème du privé ; notre ambition ne se limite donc pas exclusivement à ces Petites et Moyennes Entreprises mais vise aussi à capter les capitaux des grandes entreprises (qui pour certaines finançaient des PME). Ces grandes entreprises représentant des marchés pour les PME, notamment en matière de sous-traitance, il est tout à fait logique et intéressant de les intégrer dans notre démarche. Il faut aussi noter que certaines structures telles que les pharmacies ou les cabinets d’avocats, qui sont aussi des PME, sont souvent laissées de côté. Elles sont aussi prises en charge dans notre démarche. Accompagner les PME, c'est aussi adapter nos produits aux salariés de ces entreprises en proposant par exemple des crédits de consommation, des crédits immobiliers, etc. L’idée est donc de migrer d’une offre classique de financement pour aller vers le crédit-bail, la finance islamique etc., afin d’ouvrir de nouvelles perspectives tout en mettant en place de meilleurs mécanismes de gestion des risques.

A cet effet, un calendrier 2013-2018 avait été adopté mais n’a pu être mis en œuvre dans son intégralité car dès le début de ses activités, la Banque a été submergée d’entreprises ayant des besoins spécifiques, de porteurs de projets, etc. Mais la période 2013-2016 a tout de même été fructueuse avec par exemple la signature de nombreuses conventions avec des structures d'appui non-financier, telles que l’Agence de Développement et d’Encadrement des PME (ADEPME), qui apportent leur expertise à la Banque et aux entreprises que nous accompagnons. Le Business Plan 2018-2021 a été récemment validé. Le crédit-bail est en cours de développement et sera intégré à nos offres d’ici deux (2) ans afin d’accompagner les entreprises qui veulent améliorer leurs capacités de financement et croître, leur permettre d’avoir une visibilité sur le moyen et le long terme, et préfinancer leurs besoins futurs. Il en est de même pour la finance islamique qui elle sera intégrée dans trois (3) ans. L'autre objectif est de continuer à financer le fonds de roulement à l'exportation des PME et d’accroître notre impact sur le tissu socio-économique sénégalais.

PG : En 2 ans d'existence, quels sont les résultats à ce jour et comment jugez-vous l'efficacité de votre action et votre impact socio-économique ?

TSNS : En deux (2) ans, nous avons plus que triplé notre total bilan qui est passé de 30 milliards F CFA à 100 milliards F CFA, et nous avons multiplié par trois (3) notre portefeuille-clients avec de plus en plus de sénégalais et d’entreprises qui nous font confiance et déposent leur argent dans notre banque. A ce jour, nous avons six mille (6000) clients sur tout le territoire, dont 53% sont des PME. En 2017, ce nombre sera doubler grâce aux PME mais aussi à l’attrait de nouveaux particuliers. En février 2017, nous aurons onze (11) agences réparties sur une bonne partie du territoire. Nous sommes aujourd’hui présents à Saint-Louis, Thiès, Ziguinchor, Touba, Kaolack, Ourossogui, Podor et bien sûr Dakar. L'année 2017 verra l’extension de notre réseau dans le Sud du pays, notamment dans la région de Sédhiou. Notre ambition est d’utiliser les nouvelles technologies pour un maillage plus constructif, avec la mise en place d'un système financier basé sur le wallet (banque digitale). En deux (2) ans, la BNDE s’est également mise à niveau en termes d'offre financière avec à ce jour toutes les possibilités liées à la monétique (compte avec carte de paiement, de retrait, prépayé, agréé Visa et MasterCard), au sms banking et au e-banking. Une politique de communication visant à assurer la visibilité de la Banque a également été mise en œuvre et sera renforcée en 2017.

Concernant le financement, deux volets ont été développés en 2016 : i) le financement d’entreprises ayant des besoins classiques d’exploitation avec, en bilan et hors-bilan le financement de plus de 300 entreprises pour un flux de plus de soixante-dix (70) milliards, ii) et le financement d’investissement menant à la création d'entreprises. Nous avons également participé au financement de l'Etat du Sénégal par le lancement des emprunts obligataires et le lancement des bons du Trésor de l’Etat. En outre, nous accompagnons des institutions de microfinance pour en faire nos relais auprès des microentreprises qui ne devraient pas être laissées hors du système bancaire et devraient aussi pouvoir bénéficier de possibilités de financement car constituant l’une des bases de développement du secteur privé.

Ainsi, trois (3) milliards de financement ont permis la création d'environ deux mille (2 000) emplois en 2016. En effet lorsque nous investissons dans une PME, nous disposons de l’effectif initial et du supplément d'effectif induit par le financement, ce qui nous permet de mesurer notre impact sur le marché du travail. Depuis sa création, la BNDE en est donc à environ cinq mille (5 000) emplois créés, avec la consolidation et la création d'entreprises.

Mais selon moi, ce qu'il reste à faire est encore plus important car nous évoluons dans un environnement quasi-vierge où les besoins sont énormes. La BNDE se veut un catalyseur dans son écosystème socio-économique et bancaire. A notre arrivée sur le marché, le secteur agricole n’était accompagné par les banques qu’à hauteur de 3% ; aujourd’hui il représente 21% du portefeuille de la BNDE, avec l’appui de partenaires tels que la Caisse Nationale de Crédit Agricole du Sénégal (CNCAS). Il s’agit donc de pousser les banques à s’intéresser et à investir dans des secteurs stratégiques laisser de côté, en prenant le lead et en montrant l’exemple : par exemple à travers l’accompagnement de filières porteuses (anacarde, arachide, riz) par le financement de la production, mais aussi en investissant dans la transformation. Nos interventions ont permis à certains opérateurs d'investir dans la transformation, boostant ainsi l’économie locale grâce au besoin de main d’œuvre, mais aussi à la consommation par les sénégalais de denrées locales (e.g. le riz de la vallée). Cela constitue aussi l’un des objectifs de la BNDE : permettre aux entreprises de ne pas se limiter à l’exportation de matières premières mais aussi de transformer ces matières premières localement, créant ainsi une plus-value. `
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
      .then(() => {
        console.log('finished populating users');
      });
  });
