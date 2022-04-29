const movies = require('express').Router();
const mysql = require('mysql2');

// get route for basic movies
movies.get('/', (req, res) =>{
    console.info("got a GET request for movies");
    res.json("All movies will be returned through this route");
});

// TODO: hook up DB

movies.post('/add-movie', (req, res) => {
    console.info(req.body);
    res.json("Still working on this, will post soon");
});

movies.post('/update-review', (req, res) => {
    console.info("got a post request to update a review");
    res.json("You tried to add a review");
});

movies.delete('/movie/id', (req,res) => {
    console.info("got a request to delete a movie");
    res.json("You tried to delete a movie");
});

module.exports = movies;