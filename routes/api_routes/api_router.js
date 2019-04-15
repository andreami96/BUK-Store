"use strict";

let express = require('express');
let router = express.Router();

let { headerJSON } = require('../../middlewares/setHeaders');

router.use(headerJSON);

router.get('/', function (req, res) {
    res.send("PROVA API");
});

module.exports = router;