"use strict";

let express = require('express');
let router = express.Router();

const { logout } = require('../../../Controller/User/logout');
const { checkAuthMiddleware } = require('../../../Middlewares/checkAuthenticationMiddleware');

router.get('/', checkAuthMiddleware, function (req, res, next) {
    logout(req.userID)
        .then( (result) => {
            res.clearCookie("X-API-KEY");
            return res
                .status(200)
                .redirect('/');
        })
        .catch( (error) => {
            next(error);
        });

});

module.exports = router;