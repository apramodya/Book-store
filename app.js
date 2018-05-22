var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Hello');
});

// get genres
app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    })
});

// add genre
app.post('/api/genre', function (req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    })
});

// update genre
app.put('/api/genre/:_id', function (req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    })
});

// delete genre
app.delete('/api/genre/:_id', function (req, res) {
    var id = req.params._id;
    Genre.deleteGenre(id, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    })
});

// get books
app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});

// get book by id
app.get('/api/book/:_id', function (req, res) {
    Book.getBookByID(req.params._id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});

// add book
app.post('/api/book', function (req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});

// update book
app.put('/api/book/:_id', function (req, res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});

// delete book
app.delete('/api/book/:_id', function (req, res) {
    var id = req.params._id;
    Book.deleteBook(id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});

app.listen(3000);
console.log('running on port 3000');