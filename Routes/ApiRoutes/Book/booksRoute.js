"use strict";

let express = require('express');
let router = express.Router();

const { findAllBook, findBookByISBN } = require('../../../Controller/Book/book');
const { findAuthorsByISBN } = require('../../../Controller/BookAuthor/bookAuthor');
const { findEventsByISBN } = require('../../../Controller/BookEvent/bookEvent');


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

router.get('/:isbn/authors', function (req, res, next) {

    findAuthorsByISBN(req.params.isbn)
        .then( (authorsArray) => {
            res.status(200).send(authorsArray);
        })
        .catch( (err) => {
            next(err);
        })

});

router.get('/:isbn/events', function (req, res, next) {

    findEventsByISBN(req.params.isbn)
        .then( (eventArray) => {
            res.status(200).send(eventArray);
        })
        .catch( (err) => {
            next(err);
        })

});

module.exports = router;