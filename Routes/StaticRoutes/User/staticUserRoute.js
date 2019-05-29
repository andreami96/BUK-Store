"use strict";

const path = require('path');
let express = require('express');
let router = express.Router();

const { checkAuthMiddleware } = require('../../../Middlewares/checkAuthenticationMiddleware');

router.get('/', checkAuthMiddleware, function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../public/user/me.html'));
});

router.get('/modify', checkAuthMiddleware, function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../../public/user/modify.html'));
});

module.exports = router;