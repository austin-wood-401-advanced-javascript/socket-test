'use strict';

const theword = require('./theword');

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('the-bird', theword);

