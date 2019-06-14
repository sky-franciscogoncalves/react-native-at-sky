const { movies } = require('../data/movies.json');

export const fetchMovies = () => Promise.resolve(movies);
