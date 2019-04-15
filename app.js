"use strict";
const SERVER_PORT = 80;
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let mainRouter = require('./routes/mainRouter');

app.use('/', mainRouter);

app.listen(SERVER_PORT, () => {
  console.log("The BUK Server is now starting on port: " + SERVER_PORT);
});
