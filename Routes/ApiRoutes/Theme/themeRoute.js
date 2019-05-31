"use strict";

let express = require('express');
let router = express.Router();

const { findThemeByID, findAllThemes } = require('../../../Controller/Theme/theme');
const { findBooksByTheme } = require('../../../Controller/Theme/ThemeBook/themeBook');
const { findGenresByTheme } = require('../../../Controller/Theme/ThemeGenre/themeGenre');

router.get('/', function (req, res, next) {

    findAllThemes(req.query.limit, req.query.offset)
        .then( (genreList) => {
            return res.status(200).send(genreList);
        })
        .catch( (err) => {
            next(err);
        })

});

router.get('/:themeID', function (req, res, next) {

    findThemeByID(req.params.themeID)
        .then( (event) => {
            return res.status(200).send(event);
        })
        .catch( (err) => {
            next(err);
        });
});

router.get('/:themeID/books', function (req, res, next) {

    findBooksByTheme(req.params.themeID, req.query.limit, req.query.offset)
        .then( (event) => {
            return res.status(200).send(event);
        })
        .catch( (err) => {
            next(err);
        });
});

router.get('/:themeID/genres', function (req, res, next) {

    findGenresByTheme(req.params.themeID)
        .then( (genres) => {
            return res.status(200).send(genres);
        })
        .catch( (err) => {
            next(err);
        });

});

module.exports = router;