"use strict";

let express = require('express');
let router = express.Router();

let { headerHTML } = require('../../Middlewares/setHeaders');

const staticBookRoute = require('./Book/staticBookRoute');
const staticEventRoute = require('./Event/staticEventRoute');

router.use(headerHTML);

router.use('/books', staticBookRoute);
router.use('/events', staticEventRoute);

module.exports = router;