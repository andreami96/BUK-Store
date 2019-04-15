"use strict";

/**
 * Handle the documentation of the BUK store. So retrieve as usual the router, import
 * the SwaggerUI packet and give to it the JSON documentation
 */

let express = require('express');
let router = express.Router();

let swaggerUI = require('swagger-ui-express');
let documentation = require('./documentation');

router.use('/', swaggerUI.serve, swaggerUI.setup(documentation));

module.exports = router;