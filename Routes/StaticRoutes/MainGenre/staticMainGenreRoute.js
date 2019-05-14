"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { isInt } = require('../../../Utils/isInteger');

router.get('/:mainGenreID', function (req, res, next) {

    if(isInt(req.params.mainGenreID))
        res.sendFile(path.join(__dirname, '../../../public/catalogue/mainGenres.html'));
    else
        next()
});

module.exports = router;