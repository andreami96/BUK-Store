"use strict";

let express = require('express');
let router = express.Router();

const { findAllMainGenres, findAllGenresByMainGenreID } = require('../../../Controller/MainGenre/mainGenre');


router.get('/', function (req, res, next) {

    findAllMainGenres(req.query.limit, req.query.offset)
        .then( (mainGenreList) => {
            return res.status(200).send(mainGenreList);
        })
        .catch( (err) => {
            next(err);
        });

});

router.get('/:mainGenreID/genres', function (req, res, next) {

    findAllGenresByMainGenreID(req.params.mainGenreID)
        .then( (genreList) => {
            return res.status(200).send(genreList);
        })
        .catch( (err) => {
            next(err);
        });

});

module.exports = router;