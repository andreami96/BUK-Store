"use strict";
/**
 *  Main router used to handle the request coming both for the API routes and for the STATIC routes.
 *  Moreover it handles the documentation route
 */

let express = require('express');
let router = express.Router();

// Import the documentation route
let docs_route = require('./docs/docs_route');

// Import both the api router and the static router
let api_router = require('./api_routes/api_router');
let static_router = require('./static_routes/static_router');

// Set the path of the docs, and handle that path with docs_route
router.use('/docs', docs_route);

/**
 * Handle the paths for the API and for the STATIC pages, giving the responsibilities to the proper router
 */
router.use('/api/v1', api_router);
router.use('/', static_router);

// Export the router to the app
module.exports = router;