"use strict";

let express = require('express');
let router = express.Router();

let { headerJSON } = require('../../Middlewares/setHeaders');

const signupRoute = require('./User/signupRoute');
const activationRoute = require('./User/activationRoute');

router.use(headerJSON);

router.use('/signup', signupRoute);
router.use('/activation', activationRoute);

module.exports = router;