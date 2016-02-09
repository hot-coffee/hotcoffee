'use strict';

const path = require('path');
const logger = require('gruew-logger');
const _ = require('underscore');
const jsonResponse = require('./json-response');
const config = require('./../config');
const requestJson = require('request-json');


module.exports = {
    index: function (req, res) {
        logger.log(['serving index.html'], __filename, false);
        res.sendFile(path.join(__dirname, '../public/index.html'));
    },

    saveEmail: function (req, res) {
        if (!_.has(req.body, 'email')) {
            logger.log(['No email in req.body to save'], __filename, true);
            jsonResponse(new Error('no email in post object'), null, res);
            return;
        }

        logger.log(['Saving email:', req.body.email], __filename, false);
        const data = {
            database: config.database.db,
            collection: config.database.collections.profiles,
            payload: [{email: req.body.email}]
        };

        const client = requestJson.createClient(config.database.hostAndPort());
        client.post(config.database.postPath, data, function (error, response, data) {
            if (error) {
                logger.log(
                    [
                        'Failed to post to:',
                        config.database.hostAndPort(),
                        'email',
                        req.body.email,
                        'to db with error',
                        error
                    ],
                    __filename,
                    true
                );
                jsonResponse(error, null, res);
                return;
            }

            logger.log(['Posted to database. Response:', data], __filename, false);
            jsonResponse(null, data, res);
        });
    }
};
