"use strict";

let express = require('express');
let router = express.Router();

let { headerJSON } = require('../../Middlewares/setHeaders');

// Routes related to the user registration/login
const signupRoute = require('./User/signupRoute');
const activationRoute = require('./User/activationRoute');
const loginRoute = require('./User/loginRoute');

// Routes related to the user management
const meRoute = require('./User/meRoute');

// Routes related to the Book
const booksRoute = require('./Book/booksRoute');

// Routes realted to the Event
const eventRoute = require('./Event/eventRoute');

router.use(headerJSON);

// Routes related to the user registration/login
router.use('/signup', signupRoute);
router.use('/activation', activationRoute);
router.use('/login', loginRoute);

// Routes related to the user management
router.use('/me', meRoute);

// Routes related to the Book
router.use('/books', booksRoute);

// Routes realted to the Event
router.use('/events', eventRoute);

module.exports = router;