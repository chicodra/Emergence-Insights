/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/fiche_actualites', require('./api/fiche_actualite'));
  app.use('/api/agendas', require('./api/agenda'));
  app.use('/api/documentations', require('./api/documentation'));
  app.use('/api/actualites', require('./api/actualite'));
  app.use('/api/payss', require('./api/pays'));
  app.use('/api/partie_themes', require('./api/partie_theme'));
  app.use('/api/articles', require('./api/article'));
  app.use('/api/fiche_de_bonne_pratiques', require('./api/fiche_de_bonne_pratique'));
  app.use('/api/etude_de_cass', require('./api/etude_de_cas'));
  app.use('/api/interviews', require('./api/interview'));
  app.use('/api/themes', require('./api/theme'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
