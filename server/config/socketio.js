/**
 * Socket.io configuration
 */
'use strict';

// import config from './environment';

// When the user disconnects.. perform this
function onDisconnect(/*socket*/) {}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', data => {
    socket.log(JSON.stringify(data, null, 2));
  });

  // Insert sockets below
  require('../api/sujet/sujet.socket').register(socket);
  require('../api/fiche_actualite/fiche_actualite.socket').register(socket);
  require('../api/agenda/agenda.socket').register(socket);
  require('../api/documentation/documentation.socket').register(socket);
  require('../api/actualite/actualite.socket').register(socket);
  require('../api/pays/pays.socket').register(socket);
  require('../api/partie_theme/partie_theme.socket').register(socket);
  require('../api/article/article.socket').register(socket);
  require('../api/fiche_de_bonne_pratique/fiche_de_bonne_pratique.socket').register(socket);
  require('../api/etude_de_cas/etude_de_cas.socket').register(socket);
  require('../api/interview/interview.socket').register(socket);
  require('../api/theme/theme.socket').register(socket);
}

export default function(socketio) {
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

  // We can authenticate socket.io users and access their token through socket.decoded_token
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

  socketio.on('connection', function(socket) {
    socket.address = `${socket.request.connection.remoteAddress}:${socket.request.connection.remotePort}`;

    socket.connectedAt = new Date();

    socket.log = function(...data) {
      console.log(`SocketIO ${socket.nsp.name} [${socket.address}]`, ...data);
    };

    // Call onDisconnect.
    socket.on('disconnect', () => {
      onDisconnect(socket);
      socket.log('DISCONNECTED');
    });

    // Call onConnect.
    onConnect(socket);
    socket.log('CONNECTED');
  });
}
