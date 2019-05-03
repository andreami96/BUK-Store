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

// Routes related to the Event
const eventRoute = require('./Event/eventRoute');

// Routes related to the Genre
const genreRoute = require('./Genre/genreRoute');

// Routes related to the Theme
const themeRoute = require('./Theme/themeRoute');

// Routes related to the Author
const authorRoute = require('./Author/authorRoute');

// Routes related to the Cart of the User
const cartRoute = require('./Cart/cartRoute');

// Routes related to the Reservations
const reservationRoute = require('./Reservation/reservationRoute');

router.use(headerJSON);

// Routes related to the user registration/login
router.use('/signup', signupRoute);
router.use('/activation', activationRoute);
router.use('/login', loginRoute);

// Routes related to the user management
router.use('/me', meRoute);

// Routes related to the Cart of the User
router.use('/me/cart', cartRoute);

// Routes related to the Book
router.use('/books', booksRoute);

// Routes related to the Event
router.use('/events', eventRoute);

// Routes related to the Genre
router.use('/genres', genreRoute);

// Routes related to the Theme
router.use('/themes', themeRoute);

// Routes related to the Theme
router.use('/authors', authorRoute);

// Routes related to the Reservations
router.use('/me/reservations', reservationRoute);

module.exports = router;