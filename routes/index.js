const express = require('express');

const movieRouter = require('./movies');

const app = express();

app.use('/movies', movieRouter);





module.exports = app;
