"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { findAllRawGenresByMainGenreID } = require('../../../Controller/MainGenre/rawMainGenre');

router.get('/:mainGenreID', function (req, res, next) {

    let mainGenreID = parseInt(req.params.mainGenreID);

    if(Number.isInteger(mainGenreID) && mainGenreID <= Math.pow(2, 31))
        findAllRawGenresByMainGenreID(mainGenreID)
            .then((mainGenre) => {
                if(mainGenre.length > 0)
                    return res.sendFile(path.join(__dirname, '../../../public/catalogue/genres.html'));
                else
                    return next();
            }).catch((err) => {
            console.log(err);
            return next(new Response(500, "Internal Server Error"));
        });
    else
        next();
});

module.exports = router;