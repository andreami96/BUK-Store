"use strict";

let express = require('express');
let router = express.Router();

const { signUpNewUser } = require('../../../Controller/User/signup');


router.post('/', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;

    signUpNewUser(name, surname, email, password)
        .then( (response) => {
            return res.status(response.statusCode).send(response.toJSON());
        })
        .catch( (error) => {
            next(error);
        });

});

module.exports = router;