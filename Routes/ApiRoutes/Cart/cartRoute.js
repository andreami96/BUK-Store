"use strict";

let express = require('express');
let router = express.Router();

const { findCartByUserID,
        addProductToCart,
        changeProductQuantity,
        deleteProduct } = require('../../../Controller/Cart/cart');

const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');
const { checkAuthMiddleware } = require('../../../Middlewares/checkAuthenticationMiddleware');


router.get('/', checkAuthMiddleware, function (req, res, next) {

    findCartByUserID(req.userID)
        .then( (cart) => {
            res.status(200).send(cart)
        })
        .catch( (err) => {
            next(err)
        });
});

router.post('/', checkAuthMiddleware, function (req, res, next) {

    let isbn = req.body.ISBN;
    let quantity = req.body.quantity;

    if(!isbn || !quantity)
        next(new Response(400, "ISBN or Quantity parameter is missing"));
    if( !isInt(isbn) )
        next(new Response(400, "ISBN should be an integer"));
    if( !isInt(quantity) )
        next(new Response(400, "Quantity should be an integer"));

    addProductToCart(req.userID, isbn, parseInt(quantity))
        .then( (cart) => {
            res.status(200).send(cart)
        })
        .catch( (err) => {
            next(err)
        });
});

router.put('/', checkAuthMiddleware, function (req, res, next) {

    let isbn = req.body.ISBN;
    let quantity = req.body.quantity;

    if(!isbn || !quantity)
        next(new Response(400, "ISBN or Quantity parameter is missing"));
    if( !isInt(isbn) )
        next(new Response(400, "ISBN should be an integer"));
    if( !isInt(quantity) )
        next(new Response(400, "Quantity should be an integer"));

    changeProductQuantity(req.userID, isbn, parseInt(quantity))
        .then( (cart) => {
            res.status(200).send(cart)
        })
        .catch( (err) => {
            next(err)
        });
});

router.delete('/', checkAuthMiddleware, function (req, res, next) {

    let isbn = req.query.ISBN;

    if(!isbn)
        next(new Response(400, "ISBN query parameter is missing"));
    if( !isInt(isbn) )
        next(new Response(400, "ISBN should be an integer"));

    deleteProduct(req.userID, isbn)
        .then( (cart) => {
            res.status(200).send(cart)
        })
        .catch( (err) => {
            next(err)
        });
});


module.exports = router;