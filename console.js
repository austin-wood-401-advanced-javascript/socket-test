'use strict';

const theword = require('./theword');

const io = require('socket.io-client');

const socket = io.connect('http://aw-socket-server.us-east-2.elasticbeanstalk.com/');

socket.on('the-bird', theword);

