"use strict";

let express = require('express');
let router = express.Router();

const { activateAccount } = require('../../../Controller/User/activateAccount');


router.get('/:activationToken', function (req, res, next) {

    activateAccount(req.params.activationToken)
        .then( (response) => {
            return res.sendFile(path.join(__dirname, '../../../public/welcome.html'));
        })
        .catch( (error) => {
            next(error);
        });

});

module.exports = router;