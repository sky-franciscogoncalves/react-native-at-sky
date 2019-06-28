import { randomDelay } from './fetchUtils';
const { movies } = require('../data/movies.json');

export const fetchMovies = () => Promise.resolve(movies).then(randomDelay());

export const fetchMovie = id => Promise.resolve(movies.find(movie => movie.id === id)).then(randomDelay());
