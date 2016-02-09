'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('gruew-logger');
const cookieParser = require('cookie-parser');
const requestHandler = require('./handlers/request-handler');
const path = require('path');


var App = function() {
    if (process.argv.length > 2 && process.argv[2] === 'test') {

    } else {
        var app = express();
        app.use(express.static(path.join(__dirname, 'public')));

        app.use(bodyParser.json());
        app.use(cookieParser());

        // get request
        app.get('/', requestHandler.index);

        // posts
        app.post('/save-profile', requestHandler.saveEmail);

        app.listen(config.port, function () {
            logger.log(
                ['Server running at:', config.port, 'in mode:', config.mode],
                __filename,
                false
            );
        });
    }

};

module.exports = App;
