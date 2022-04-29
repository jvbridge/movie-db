const express = require('express');
const path = require('path');
const {clog} =require('./middleware/clog');
const app = express();
const api = require('./routes/index');

const PORT = process.env.port || 3000;

// Middleware
app.use(clog);

app.use(express.json());
app.use(express.urlencoded);
app.use('/api', api);



app.listen(PORT, () => {
    console.log("Server is lisetening on port: ", PORT);
});