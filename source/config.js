'use strict';

const _ = require('underscore');

const appName = 'hotcoffee';

const mode = !!process.env['HOTCOFFEE_MODE'] ? process.env['HOTCOFFEE_MODE'] : 'production';
var dbHost;
var dbPort;

if (mode === 'production') {
    dbHost = 'http://ec2-54-201-78-188.us-west-2.compute.amazonaws.com';
    dbPort = '80';
} else {
    dbHost = 'http://localhost';
    dbPort = '9042';
}

module.exports = {
    appName: appName,
    port: '9036',
    mode: mode,
    database: {
        db: appName,
        dbHost: dbHost,
        dbPort: dbPort,
        postPath: 'save-records/',
        getPath: 'all-records/',
        collections: {
            profiles: 'profiles'
        },
        hostAndPort: function () {
            return dbHost + ':' + dbPort;
        }
    }
};
