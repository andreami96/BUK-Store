"use strict";

let express = require('express');
let router = express.Router();

const { findUserByID } = require('../../../Controller/User/me');
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

module.exports = router;