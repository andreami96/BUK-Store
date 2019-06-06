"use strict";

let express = require('express');
let router = express.Router();

const { findGenreByID, findAllGenres } = require('../../../Controller/Genre/genre');
const { findBookByGenre } = require('../../../Controller/Genre/GenreBook/genreBook');
const { findThemesByGenre } = require('../../../Controller/Genre/GenreTheme/genreTheme');



router.get('/', function (req, res, next) {

    findAllGenres(req.query.limit, req.query.offset)
        .then( (genreList) => {
            return res.status(200).send(genreList);
        })
        .catch( (err) => {
            next(err);
        })

});

router.get('/:genreID', function (req, res, next) {

    findGenreByID(req.params.genreID)
        .then( (genre) => {
            return res.status(200).send(genre);
        })
        .catch( (err) => {
            next(err);
        });
});

router.get('/:genreID/books', function (req, res, next) {

    findBookByGenre(req.params.genreID, req.query.limit, req.query.offset)
        .then( (books) => {
            return res.status(200).send(books);
        })
        .catch( (err) => {
            next(err);
        });
});

router.get('/:genreID/themes', function (req, res, next) {

    findThemesByGenre(req.params.genreID)
        .then( (themes) => {
            return res.status(200).send(themes);
        })
        .catch( (err) => {
            next(err);
        });

});

module.exports = router;