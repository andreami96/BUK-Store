"use strict";

const Error = require('../utils/response');

module.exports = {

    /***
     *  Function used to handle the 404 error, Not Found. It must be the first of the Error handling usage
     * @param req       The request object
     * @param res       The response object
     * @returns {*}     Return the final response
     */
    handling_404: function(req, res) {
        res.setHeader("Content-Type", "application/json");
        return res.status(404).send(new Error(404, 'http://localhost' + req.url + ' not found').toJSON());
    },

    /***
     *  Function used to handle the 400 error, Bad Request
     * @param error     The error object
     * @param req       The request object
     * @param res       The response object
     * @param next      The next middleware for error handling
     * @returns {*}     Return the final response
     */
    handling_400: function(error, req, res, next) {
        if (error.statusCode === 400) {
            res.setHeader("Content-Type", "application/json");

            if(error.description)
                return res.status(400).send(error.toJSON());
            else
                return res.status(400).send(new Error(400, 'Bad Request').toJSON());
        }
        next(error);
    },

    /***
     *  Function used to handle the 401 error, Unauthorized
     * @param error     The error object
     * @param req       The request object
     * @param res       The response object
     * @param next      The next middleware for error handling
     * @returns {*}     Return the final response
     */
    handling_401: function(error, req, res, next) {
        if (error.statusCode === 401) {
            res.setHeader("Content-Type", "application/json");

            if(error.description)
                return res.status(401).send(error.toJSON());
            else
                return res.status(401).send(new Error(401, 'The user in not authorized to access this endpoint').toJSON());
        }
        next(error);
    },

    /***
     *  Function used to handle the 409 error, Conflict
     * @param error     The error object
     * @param req       The request object
     * @param res       The response object
     * @param next      The next middleware for error handling
     * @returns {*}     Return the final response
     */
    handling_409: function(error, req, res, next) {
        if (error.statusCode === 409) {
            res.setHeader("Content-Type", "application/json");

            if(error.description)
                return res.status(409).send(error.toJSON());
            else
                return res.status(409).send(new Error(409, 'Conflict').toJSON());
        }
        next(error);
    },

    /***
     *  Function used to handle the 500 error, Internal Server Error. It must be the last usage of the application
     * @param error     The error object
     * @param req       The request object
     * @param res       The response object
     * @param next      The next middleware for error handling
     * @returns {*}     Return the final response
     */
    handling_500: function(error, req, res, next) {
        res.setHeader("Content-Type", "application/json");

        if(error.description)
            return res.status(500).send(error.toJSON());
        else
            return res.status(500).send(new Error(500, 'Internal Server Error').toJSON());
    }
};