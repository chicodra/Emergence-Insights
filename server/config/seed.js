/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Theme from '../api/theme/theme.model';
import User from '../api/user/user.model';
import Article from '../api/article/article.model';
Theme.find({}).remove()
  .then(() => {
    Theme.create({
    _id: 1,
    libelle: 'Leadership, Gouvernance et Culture de l’Emergence'
    },{
    _id: 2,
    libelle: 'Action et Coordination du Gouvernement'
    },{
    _id: 3,
    libelle: 'Moteurs de croissance'
    },{
    _id: 4,
    libelle: 'Secteurs Supports'
    },{
    _id: 5,
    libelle: 'Développement des Entreprises'
    }
    ).then(() => {
      console.log('finished populating Themes');
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
