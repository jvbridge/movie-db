const express = require('express');

const movieRouter = require('./movies');
const reviewRouter = require('./reviews');

const app = express();

app.use('./movies', movieRouter);
app.use('./reviews', reviewRouter);

module.exports = app;
