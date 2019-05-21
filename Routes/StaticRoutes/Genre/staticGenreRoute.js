"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { isInt } = require('../../../Utils/isInteger');

router.get('/:genreID', function (req, res, next) {

    if(isInt(req.params.genreID))
        res.sendFile(path.join(__dirname, '../../../public/catalogue/genres-single.html'));
    else
        next()
});

module.exports = router;