"use strict";

let express = require('express');
let router = express.Router();

let { headerHTML } = require('../../Middlewares/setHeaders');

const staticBookRoute = require('./Book/staticBookRoute');
const staticAuthorRoute = require('./Author/staticAuthorRoute');
const staticEventRoute = require('./Event/staticEventRoute');
const staticMainGenreRoute = require('./MainGenre/staticMainGenreRoute');
const staticGenreRoute = require('./Genre/staticGenreRoute');
const staticThemeRoute = require('./Theme/staticThemeRoute');
const staticCatalogueRoute = require('./Catalogue/staticCatalogueRoute');

const staticUserRoute = require('./User/staticUserRoute');

// Download
const downloadRoute = require('./Download/downloadRoute');

router.use(headerHTML);

router.use('/books', staticBookRoute);
router.use('/authors', staticAuthorRoute);
router.use('/events', staticEventRoute);
router.use('/mainGenres', staticMainGenreRoute);
router.use('/genres', staticGenreRoute);
router.use('/themes', staticThemeRoute);
router.use('/catalogue', staticCatalogueRoute);

router.use('/me', staticUserRoute);

router.use('/download', downloadRoute);

module.exports = router;