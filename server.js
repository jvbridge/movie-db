const express = require('express');
const path = require('path');
const {clog} =require('./middleware/clog');
const app = express();
const api = require('./routes/index');

const PORT = process.env.port || 3000;

// Middleware
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// main API router
app.use('/api', api);

// TODO: public gets

// starting the app
app.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT);
});