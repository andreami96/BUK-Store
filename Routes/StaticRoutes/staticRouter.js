"use strict";

let express = require('express');
let router = express.Router();

let { headerHTML } = require('../../Middlewares/setHeaders');

router.use(headerHTML);

module.exports = router;