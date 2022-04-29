SELECT *
FROM movies
JOIN reviews ON reviews.movies = movies.id;

SELECT *
FROM reviews
JOIN movies ON movies.reviews = reviews.id;

SELECT movie_name AS MovieTitle, movies.name , reviews.review
FROM movies
JOIN course_names ON course_names.department = department.id;
