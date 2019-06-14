import { AsyncStorage } from 'react-native';
const { movies } = require('../data/movies.json');

const MOVIES_BOUGHT_KEY = 'movies-bought';

export const purchaseMovie = async movieId => {
  const movie = movies && movies.find(m => m.id === movieId);
  if (!movie) {
    return Promise.reject("Couldn't purchase this movie!");
  }
  try {
    const moviesBought = JSON.parse(await AsyncStorage.getItem(MOVIES_BOUGHT_KEY)) || [];
    moviesBought.push(movieId);
    return AsyncStorage.setItem(MOVIES_BOUGHT_KEY, JSON.stringify([...new Set(moviesBought)]));
  } catch (error) {
    return Promise.reject(error);
  }
};
