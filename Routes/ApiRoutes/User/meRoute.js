"use strict";

let express = require('express');
let router = express.Router();

const { findUserByID, modifyUserByID } = require('../../../Controller/User/me');
const { checkAuthMiddleware } = require('../../../Middlewares/checkAuthenticationMiddleware');

router.get('/', checkAuthMiddleware, function (req, res, next) {

    findUserByID(req.userID)
        .then( (userObject) => {
            res.status(200).send(userObject);
        })
        .catch( (err) => {
            next(err);
        })

});

router.put('/', checkAuthMiddleware, function (req, res, next) {
    const email = req.body.email.toString();
    const password = req.body.password.toString();
    const name = req.body.name.toString();
    const surname = req.body.surname.toString();

    modifyUserByID(req.userID, name, surname, email, password)
        .then( (userObject) => {
            res.status(200).send(userObject);
        })
        .catch( (err) => {
            next(err);
        })

});

module.exports = router;