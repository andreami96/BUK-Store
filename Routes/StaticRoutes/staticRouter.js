"use strict";

let express = require('express');
let router = express.Router();

let { headerHTML } = require('../../Middlewares/setHeaders');

const staticBookRoute = require('./Book/staticBookRoute');

router.use(headerHTML);

router.use('/book', staticBookRoute);

module.exports = router;