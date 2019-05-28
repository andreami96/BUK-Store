"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { isInt } = require('../../../Utils/isInteger');
const Response = require('../../../Utils/response');

const { findRawBooksByISBN } = require('../../../Controller/Book/rawBook');

router.get('/:ISBN', function (req, res, next) {

    if(isInt(req.params.ISBN))
        findRawBooksByISBN(req.params.ISBN)
            .then((book) => {
                if(book)
                    return res.sendFile(path.join(__dirname, '../../../public/books/book.html'));
                else
                    return next();
            }).catch((err) => {
                console.log(err);
                return next(new Response(500, "Internal Server Error"));
            });
    else
        next()
});

module.exports = router;