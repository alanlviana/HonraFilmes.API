const axios = require('axios');
const Movie = require('../models/Movie');

module.exports = {
    async index(request, response){

    },
    async store(request, response){
        const {Title,Year ,Rated,Released ,Runtime ,Genre ,Director ,Writer ,Actors ,Plot ,Language,Country ,Awards ,Poster ,Metascore ,imdbRating ,imdbVotes ,imdbID ,Type ,DVD ,BoxOffice,Production ,Website ,Response } = request.body;

        const movie = await Movie.findOne({imdbid: imdbID});


        if (!movie){
            await Movie.create({
                title: Title,
                year: Year,
                rated: Rated,
                release: Released,
                runtime: Runtime,
                plot: Plot           
            });
        }
        return response.json(movie);
    }

}