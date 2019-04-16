"use strict";

let express = require('express');
let router = express.Router();

let { headerJSON } = require('../../Middlewares/setHeaders');

const signupRoute = require('./User/signupRoute');
const activationRoute = require('./User/activationRoute');
const loginRoute = require('./User/loginRoute');

const meRoute = require('./User/meRoute');

router.use(headerJSON);

router.use('/signup', signupRoute);
router.use('/activation', activationRoute);
router.use('/login', loginRoute);
router.use('/me', meRoute);

module.exports = router;