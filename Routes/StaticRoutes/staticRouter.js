"use strict";

let express = require('express');
let router = express.Router();

let { headerHTML } = require('../../Middlewares/setHeaders');

router.use(headerHTML);

router.get('/', function (req, res) {
    res.redirect('/index.html');
});

module.exports = router;