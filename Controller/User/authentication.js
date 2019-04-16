"use strict";

const { Session } = require('../../Model/sequelize');
const Op = require('sequelize').Op;

/***
 * Function used to check if the user has a session enabled and valid
 * @param token                 The session token
 * @returns {Promise<any>}      If the promise is resolved, then it returns the user identifier associated to that token
 */
exports.check_session_token = function (token) {
    return new Promise( (resolve, reject) => {
        Session.findOne({
            where: {sessionToken: token, expirationDate: {[Op.gt]: new Date()}}
        }).then( (session) => {
            if(!session)
                return reject();
            return resolve(session.userID);
        });
    });
};