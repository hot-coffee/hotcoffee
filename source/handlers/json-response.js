'use strict';

module.exports = function (error, responseObject, res) {
    res.send(JSON.stringify({
        error: error,
        payload: responseObject
    }));
};
