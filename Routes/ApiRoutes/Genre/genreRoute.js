"use strict";

let express = require('express');
let router = express.Router();

const { findGenreByID, findAllGenres } = require('../../../Controller/Genre/genre');


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
        .then( (event) => {
            return res.status(200).send(event);
        })
        .catch( (err) => {
            next(err);
        });
});

/*router.get('/:eventID/book', function (req, res, next) {

    findBookByEventID(req.params.eventID)
        .then( (event) => {
            return res.status(200).send(event);
        })
        .catch( (err) => {
            next(err);
        });
});*/

module.exports = router;