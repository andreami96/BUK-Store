"use strict";

const SERVER_PORT = 80;
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let database = require('./model/sequelize');
let { handling_400, handling_401, handling_404, handling_409, handling_500 } = require('./middlewares/errorMiddleware');

let app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let mainRouter = require('./routes/mainRouter');

app.use('/', mainRouter);

// Error handling
app.use(handling_404);
app.use(handling_400);
app.use(handling_401);
app.use(handling_409);
app.use(handling_500);

// TODO Remove the comments when the database is ready to run
//database.init(true)
//    .then(() => {
      app.listen(SERVER_PORT, () => {
        console.log("The BUK Server is now starting on port: " + SERVER_PORT);
      });
//    });
