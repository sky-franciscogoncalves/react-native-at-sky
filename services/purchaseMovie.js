import { AsyncStorage } from 'react-native';
import { randomDelay } from './fetchUtils.js';
const { movies } = require('../data/movies.json');

const MOVIES_BOUGHT_KEY = 'movies-bought';

const getItemsFromStorage = async () => JSON.parse(await AsyncStorage.getItem(MOVIES_BOUGHT_KEY)) || [];

export const purchaseMovie = async movieId => {
  const movie = movies && movies.find(m => m.id === movieId);
  if (!movie) {
    return Promise.reject("Couldn't purchase this movie!");
  }
  try {
    const moviesBought = await getItemsFromStorage();
    moviesBought.push(movieId);
    return AsyncStorage.setItem(MOVIES_BOUGHT_KEY, JSON.stringify([...new Set(moviesBought)])).then(randomDelay());
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchEntitlements = () => {
  try {
    return getItemsFromStorage().then(randomDelay());
  } catch (error) {
    return Promise.reject(error);
  }
};

export const hasEntitlementForId = async movieId => {
  try {
    const entitlements = await getItemsFromStorage();
    return entitlements.find(id => movieId === id);
  } catch (error) {
    return Promise.reject(error);
  }
};
