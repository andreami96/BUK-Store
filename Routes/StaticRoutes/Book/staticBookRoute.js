"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { isInt } = require('../../../Utils/isInteger');

router.get('/:ISBN', function (req, res, next) {

    if(isInt(req.params.ISBN))
        res.sendFile(path.join(__dirname, '../../../public/books/book.html'));
    else
        next()
});

module.exports = router;