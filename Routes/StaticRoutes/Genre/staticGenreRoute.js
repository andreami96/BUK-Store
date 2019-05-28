"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { findRawGenreByID } = require('../../../Controller/Genre/rawGenre');

router.get('/:genreID', function (req, res, next) {

    let genreID = parseInt(req.params.genreID);

    if(Number.isInteger(genreID) && genreID <= Math.pow(2, 31))
        findRawGenreByID(genreID)
            .then((genre) => {
                if(genre)
                    return res.sendFile(path.join(__dirname, '../../../public/catalogue/genres-single.html'));
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