"use strict";

let express = require('express');
let router = express.Router();

const { findAllReservationByUserID, addReservationToUser } = require('../../../Controller/Reservation/reservation');
const { checkAuthMiddleware } = require('../../../Middlewares/checkAuthenticationMiddleware');

router.get('/', checkAuthMiddleware, function (req, res, next) {

    findAllReservationByUserID(req.userID)
        .then( (reservations) => {
            return res.status(200).send(reservations);
        })
        .catch( (err) => {
            next(err);
        })

});

router.post('/', checkAuthMiddleware, function (req, res, next) {
    addReservationToUser(req.userID, req.body.shippingLocation.toString())
        .then( (reservations) => {
            return res.status(200).send(reservations);
        })
        .catch( (err) => {
            next(err);
        })
});

module.exports = router;