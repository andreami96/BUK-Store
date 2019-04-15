"use strict";

let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.send("PROVA API");
});

module.exports = router;