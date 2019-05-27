"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const Response = require('../../../Utils/response');

const { findRawEventByID } = require('../../../Controller/Event/rawEvent');

router.get('/:eventID', function (req, res, next) {

    let eventID = parseInt(req.params.eventID);

    if(Number.isInteger(eventID) && eventID <= Math.pow(2, 31))
        findRawEventByID(eventID)
            .then((event) => {
                if(event)
                    return res.sendFile(path.join(__dirname, '../../../public/events/event.html'));
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