var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');
Book = require('./models/book');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Hello');
});

app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    })
});

app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});

app.listen(3000);
console.log('running on port 3000');