import { randomDelay } from './fetchUtils.js';

const playout = require('../data/playout.json');

export const fetchPlayout = movieId => Promise.resolve(playout[movieId]).then(randomDelay());
