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


Theme.find({}).remove()
  .then(() => {
    Theme.create({
    _id: 1,
    libelle: 'Leadership, Gouvernance et Culture de l’Emergence',
    mot_introduction: 'Section d’introduction VGN'
    },{
    _id: 2,
    libelle: 'Action et Coordination du Gouvernement',
    mot_introduction: 'Section d’introduction EL'
    },{
    _id: 3,
    libelle: 'Moteurs de croissance',
    mot_introduction: 'Section d’introduction '
    },{
    _id: 4,
    libelle: 'Secteurs Supports',
    mot_introduction: 'Section d’introduction ND'
    },{
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
  _id : 1,
  libelle : 'Planification, priorisation et implémentation',
  section_dintro : 'Section d’introduction ND',
  id_theme :2
},{
  _id : 2,
  libelle : 'Financement',
  section_dintro : 'Section d’introduction Babacar',
  id_theme :2
},{
  _id : 3,
  libelle : 'Suivi  et Evaluation de Projet',
  section_dintro : 'Section d’introduction ND',
  id_theme :2
},{
  _id : 4,
  libelle : 'Secteurs de services',
  section_dintro : 'Section d’introduction BABACAR',
  id_theme :4
},{
  _id : 5,
  libelle : 'Secteurs Sociaux',
  section_dintro : 'Section d’introduction PAUL GINIES',
  id_theme :4
}
).then(() => {
      console.log('finished populating Parties');
    });
  });

EtudeDeCas.find({}).remove()
  .then(() => {
    EtudeDeCas.create({
  contenu: 'Rwanda – Programmation & mise en œuvre du plan d’émergence > AJM/MF',
  id_partie :1
},{
  contenu: '- Senegal : Filière riz > ND',
   id_theme:3,
},{
  contenu: 'Gabon : Gestion Capital Naturel  > DSK / EL',
   id_theme:1,
}).then(() => {
      console.log('finished populating Etudes de Cas');
    });
  });


Fiche.find({}).remove()
  .then(() => {
    Fiche.create({
  contenu: 'Plans d’Emergence de la vision à l’action',
  id_theme:1
},{
  contenu: 'Fiche Bonne Pratique : Tourisme > AK/HB',
  id_theme:3
}).then(() => {
      console.log('finished populating Fiche');
    });
  });

  Article.find({}).remove()
  .then(() => {
    Article.create({
     contenu: `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
  id_theme: 1,
    });
  });

  Actualite.find({}).remove()
  .then(() => {
    Actualite.create({
     _id : 1,
  libelle : `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
  sujet : 'Crise de Gambie'
    },{
     _id : 2,
  libelle : `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officiis tenetur ad quod, animi corporis eum explicabo. Eos, ullam aliquam saepe neque nemo dolorum minima deserunt. Modi reprehenderit magni qui.
`,
  sujet : 'Crise de Mali'
    });
  });

  FicheActualite.find({}).remove()
  .then(() => {
    FicheActualite.create({
      _id : 1,
  id_pays :1,
  id_actualite :1,
  date : '2017-01-01'
    },
    {
      _id : 2,
  id_pays :1,
  id_actualite :2,
  date : '2017-01-01'
    });
  });

  Pays.find({}).remove()
  .then(() => {
    Pays.create({
      _id : 1,
     nom : 'BOTSWANA'
    },{
      _id : 2,
     nom : 'CAP-VERT'
    },{
      _id : 3,
     nom : 'CÔTE D\'IVOIRE'
    },{
      _id : 4,
     nom : 'ETHIOPIE'
    },{
      _id : 5,
     nom : 'GABON'
    },{
      _id : 6,
     nom : 'GUINEE EQUATORIAL'
    },{
      _id : 7,
     nom : 'KENYA'
    },{
      _id : 8,
     nom : 'MAUDICE'
    },{
      _id : 9,
     nom : 'RWANDA'
    },{
      _id : 10,
     nom : 'SENEGAL'
    },{
      _id : 11,
     nom : 'SOUTH AFRICA'
    },{
      _id : 12,
     nom : 'TANZANIE'
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
