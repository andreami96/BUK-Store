"use strict";

let express = require('express');
let router = express.Router();

const { findCarouselElements } = require('../../../Controller/HomeCarousel/homeCarousel');


router.get('/', function (req, res, next) {

    findCarouselElements()
        .then( (carouselElements) => {
            return res.status(200).send(carouselElements);
        })
        .catch( (err) => {
            next(err);
        });

});

module.exports = router;