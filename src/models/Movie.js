const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    year: String,
    rated: String,
    release: String,
    runtime: String,
    genre: [String],
    director: String,
    writer: String,
    actors: [String],
    plot: String,
    language: [String],
    country: [String],
    awards: String,
    poster: String,
    metascore: String,
    imdbrating: Number,
    imdbvotes: String,
    imdbid: String,
    type: String,
    dvd: String,
    boxoffice: String,
    production: String,
    website: String
});

module.exports = mongoose.model('movie', MovieSchema);