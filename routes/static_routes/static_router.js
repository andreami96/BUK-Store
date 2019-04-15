"use strict";

let express = require('express');
let router = express.Router();
let path = require('path');

let { headerHTML } = require('../../middlewares/setHeaders');

router.use(headerHTML);

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

module.exports = router;