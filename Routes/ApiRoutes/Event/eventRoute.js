"use strict";

let express = require('express');
let router = express.Router();

const { findAllEvents, findEventByID, findBookByEventID } = require('../../../Controller/Event/event');


router.get('/', function (req, res, next) {

    findAllEvents(req.query.from, req.query.to)
        .then( (eventList) => {
            return res.status(200).send(eventList);
        })
        .catch( (err) => {
            next(err);
        })

});

router.get('/:eventID', function (req, res, next) {

    findEventByID(req.params.eventID)
        .then( (event) => {
            return res.status(200).send(event);
        })
        .catch( (err) => {
            next(err);
        });
});

router.get('/:eventID/book', function (req, res, next) {

    findBookByEventID(req.params.eventID)
        .then( (event) => {
            return res.status(200).send(event);
        })
        .catch( (err) => {
            next(err);
        });
});

module.exports = router;