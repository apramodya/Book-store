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