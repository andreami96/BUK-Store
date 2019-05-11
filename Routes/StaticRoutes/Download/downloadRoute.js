"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

router.get('/spec', function (req, res) {
    console.log("Downloading specification");
    res.download(path.join(__dirname, '../../../public/backend/spec.yaml'), 'buk_specification.yaml');
});

router.get('/code', function (req, res) {
    console.log("Downloading application ZIP");
    res.download(path.join(__dirname, '../../../public/backend/app.zip'), 'buk_code.zip');
});

module.exports = router;