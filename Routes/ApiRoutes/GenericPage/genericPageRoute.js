"use strict";

let express = require('express');
let router = express.Router();

const { findGenericPageByName } = require('../../../Controller/GenericPage/genericPage');


router.get('/', function (req, res, next) {

    findGenericPageByName(req.query.pageName)
        .then( (pageElement) => {
            return res.status(200).send(pageElement);
        })
        .catch( (err) => {
            next(err);
        });

});

module.exports = router;