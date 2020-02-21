const axios = require('axios');

module.exports = {
    async index(request, response){
        const {title} = request.query;
        const OMDB_KEY = process.env.OMDB_KEY;
        const apiResponse = await axios.get(`http://www.omdbapi.com/?s=${title}&type=movie&apikey=${OMDB_KEY}`);
        response.json(apiResponse.data);
    }
}