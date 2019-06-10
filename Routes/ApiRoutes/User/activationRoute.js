"use strict";

let express = require('express');
let router = express.Router();
const path = require('path');

const { activateAccount } = require('../../../Controller/User/activateAccount');
let { headerHTML } = require('../../../Middlewares/setHeaders');

router.get('/:activationToken', headerHTML, function (req, res, next) {

    activateAccount(req.params.activationToken)
        .then( () => {
            return res.sendFile(path.join(__dirname, '../../../public/welcome.html'));
        })
        .catch( (error) => {
            next(error);
        });

});

module.exports = router;