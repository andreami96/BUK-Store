"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { isInt } = require('../../../Utils/isInteger');

router.get('/:cataloguePage', function (req, res, next) {

    if(isInt(req.params.cataloguePage))
        res.sendFile(path.join(__dirname, '../../../public/catalogue/catalogue.html'));
    else
        next()
});

module.exports = router;