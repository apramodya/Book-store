var mongoose = require('mongoose');

var genreScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreScheme);

// getGenres()
module.exports.getGenres = function (callback, limit) {
    Genre.find(callback).limit(limit);
}

// addGenre()
module.exports.addGenre = function (genre, callback) {
    Genre.create(genre, callback);
}

// updateGenre()
module.exports.updateGenre = function (id, genre, option, callback) {
    var query = {_id: id};
    var update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, option, callback);
}

// deleteGenre()
module.exports.deleteGenre = function (id, callback) {
    var query = {_id: id};
    Genre.remove(query, callback);
}