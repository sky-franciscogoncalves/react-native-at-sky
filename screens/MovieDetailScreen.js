import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MovieDetail } from '../views/MovieDetail';
import { backgroundStyles } from '../styles/styles';
import { fetchMovie } from '../services/fetchMovies';
import { purchaseMovie, hasEntitlementForId } from '../services/purchaseMovie';
import Loading from '../views/Loading';
import useCancellablePromise from '../hooks/useCancelablePromise';

export const MovieDetailScreen = ({ navigation }) => {
  return null;
};

MovieDetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title');
  const movie = navigation.getParam('movie');
  return {
    title: Platform.select({
      web: 'Universal Studios',
      default: movie && movie.title
    })
  };
};
