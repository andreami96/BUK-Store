"use strict";

let express = require('express');
let router = express.Router();

const { login } = require('../../../Controller/User/login');


router.post('/', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    login(email, password)
        .then( (responseObject) => {
            res.clearCookie("X-API-KEY");
            return res
                .status(200)
                .cookie('X-API-KEY', responseObject.token)
                .send(responseObject);
        })
        .catch( (error) => {
            next(error);
        });

});

module.exports = router;