"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { isInt } = require('../../../Utils/isInteger');

router.get('/:eventID', function (req, res, next) {

    if(isInt(req.params.eventID))
        res.sendFile(path.join(__dirname, '../../../public/events/event.html'));
    else
        next()
});

module.exports = router;