const {Router} = require('express');
const routes = Router();
const MovieController = require('./controllers/MovieController');
const SearchController = require('./controllers/SearchController');

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.store);

routes.get('/search', SearchController.index);

module.exports = routes;