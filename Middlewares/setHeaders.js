"use strict";

/***
 *  Simple middleware which adds the application/json header
 * @param req   The request object
 * @param res   The response object
 * @param next  The next middleware
 */
exports.headerJSON = function (req, res, next) {
    console.log('Setting the header to application/json');
    res.setHeader("Content-Type", "application/json");
    next();
};

/***
 *  Simple middleware which adds the text/html header
 * @param req   The request object
 * @param res   The response object
 * @param next  The next middleware
 */
exports.headerHTML = function (req, res, next) {
    console.log('Setting the header to text/html');
    res.setHeader("Content-Type", "text/html");
    next();
};