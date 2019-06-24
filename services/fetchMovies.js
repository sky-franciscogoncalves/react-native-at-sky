const { movies } = require('../data/movies.json');

export const fetchMovies = () => Promise.resolve(movies);

export const fetchMovie = (id) => Promise.resolve(movies.find(movie => movie.id === id));
