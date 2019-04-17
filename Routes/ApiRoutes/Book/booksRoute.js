"use strict";

let express = require('express');
let router = express.Router();

const { findAllBook, findBookByISBN } = require('../../../Controller/Book/book');


router.get('/', function (req, res, next) {

    findAllBook(req.query.limit, req.query.offset, req.query.title)
        .then( (bookArray) => {
            res.status(200).send(bookArray);
        })
        .catch( (err) => {
            next(err);
        })

});

router.get('/:isbn', function (req, res, next) {

    findBookByISBN(req.params.isbn)
        .then( (bookObject) => {
            res.status(200).send(bookObject);
        })
        .catch( (err) => {
            next(err);
        })

});

module.exports = router;