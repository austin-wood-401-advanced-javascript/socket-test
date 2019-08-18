'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://aw-socket-server.us-east-2.elasticbeanstalk.com/');

const faker = require('faker');

setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
},1000);
