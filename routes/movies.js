const movies = require('express').Router();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
    host:"127.0.0.1",
    user: "root",
    password: "password",
    database: 'movie_db'
    },
    console.log("connected to the database!")
);

// get route for basic movies
movies.get('/', (req, res) =>{
    console.info("got a GET request for movies");

    db.query("SELECT * FROM movies", (err, results) => {
        if (err){
            console.error("got an error!");
            res.json(err);
            return;
        }
        res.json(results);
    });

});

// TODO: hook up DB

movies.post('/add-movie', (req, res) => {
    console.info(req.body);
    const movieName = req.body.name;
    db.query("INSERT INTO movies(movie_name) VALUES(?)", movieName ,(err, results) =>{
        if (err) console.error("We got an error inserting into the database");
        res.json(`Adding movie: ${movieName}`);
    });
    
});

movies.post('/update-review', (req, res) => {
    console.info("got a post request to update a review");
    const {text, id} = req.body;
    console.info(`Review: ${text}, ID: ${id}`);
    db.query("INSERT INTO reviews(review, movie_id) VALUES (?,?)", [text,id], (err, results) =>{
        if (err) console.error("We got an error inserting into the database");
        res.json(`Adding review`);
    });
    res.json("You tried to add a review");
});

movies.delete('/movie/:id', (req,res) => {
    console.info("got a request to delete a movie");
    const id = req.params.id;
    db.query("DELETE FROM movies WHERE id = ?",id , (err, results) =>{
        if (err) console.error("We got an error inserting into the database");
    });
    res.json("You tried to delete a movie");
});

module.exports = movies;