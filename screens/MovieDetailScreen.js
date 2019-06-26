import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MovieDetail } from '../views/MovieDetail';
import { BackgroundStyles } from './BackgroundStyles';
import { fetchMovie } from '../services/fetchMovies';
import Loading from '../views/Loading';
import useCancellablePromise from '../hooks/useCancelablePromise';

export const MovieDetailScreen = ({ navigation }) => {
  const [movie, setMovie] = useState(navigation.getParam('movie'));
  const { cancellablePromise } = useCancellablePromise();

  useEffect(() => {
    cancellablePromise(fetchMovie(navigation.getParam('id'))).then(movie => {
      setMovie(movie);
      if (Platform.OS !== 'web') {
        navigation.setParams({ title: movie.title });
      }
    });
  }, [movie]);

  if (!movie) {
    return <Loading />;
  }

  return (
    <View style={BackgroundStyles.container}>
      <MovieDetail movie={movie} navigation={navigation} />
    </View>
  );
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
