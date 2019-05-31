"use strict";

let express = require('express');
let router = express.Router();

const { findAllAuthors, findAuthorByID } = require('../../../Controller/Author/author');
const { findBooksByAuthor } = require('../../../Controller/Author/AuthorBook/authorBook');

router.get('/', function (req, res, next) {

    findAllAuthors(req.query.limit, req.query.offset)
        .then( (authorList) => {
            return res.status(200).send(authorList);
        })
        .catch( (err) => {
            next(err);
        })

});

router.get('/:authorID', function (req, res, next) {

    findAuthorByID(req.params.authorID)
        .then( (event) => {
            return res.status(200).send(event);
        })
        .catch( (err) => {
            next(err);
        });
});

router.get('/:authorID/books', function (req, res, next) {

    findBooksByAuthor(req.params.authorID, req.query.limit, req.query.offset)
        .then( (books) => {
            return res.status(200).send(books);
        })
        .catch( (err) => {
            next(err);
        });
});

module.exports = router;