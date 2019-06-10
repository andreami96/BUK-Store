"use strict";

let express = require('express');
let router = express.Router();

const { findFavouriteReadings } = require('../../../Controller/FavouriteReadings/favouriteReadings');


router.get('/', function (req, res, next) {

    findFavouriteReadings()
        .then( (bookList) => {
            return res.status(200).send(bookList);
        })
        .catch( (err) => {
            next(err);
        })

});

module.exports = router;