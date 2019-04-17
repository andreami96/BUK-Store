"use strict";

const SERVER_PORT = 8080;
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let creator = require('./Config/populateDB');
let { handling_400, handling_401, handling_404, handling_409, handling_500 } = require('./Middlewares/errorMiddleware');

let app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let mainRouter = require('./Routes/mainRouter');

app.use('/', mainRouter);

// Error handling
app.use(handling_404);
app.use(handling_400);
app.use(handling_401);
app.use(handling_409);
app.use(handling_500);


creator.createDatabase(true, true)
    .then(() => {
      app.listen(SERVER_PORT, () => {
        console.log("The BUK Server is now starting on port: " + SERVER_PORT);
      });
    });
