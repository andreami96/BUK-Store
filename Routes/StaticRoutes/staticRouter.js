"use strict";

let express = require('express');
let router = express.Router();

let { headerHTML } = require('../../Middlewares/setHeaders');

const staticBookRoute = require('./Book/staticBookRoute');
const staticEventRoute = require('./Event/staticEventRoute');
const staticMainGenreRoute = require('./MainGenre/staticMainGenreRoute');

// Download
const downloadRoute = require('./Download/downloadRoute');

router.use(headerHTML);

router.use('/books', staticBookRoute);
router.use('/events', staticEventRoute);
router.use('/mainGenres', staticMainGenreRoute);

router.use('/download', downloadRoute);

module.exports = router;