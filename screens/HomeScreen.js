import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MoviesList } from '../views/MoviesList';
import { backgroundStyles } from '../styles/styles';
import Loading from '../views/Loading';
import { fetchMovies } from '../services/fetchMovies';
import useCancellablePromise from '../hooks/useCancelablePromise';

export const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState(undefined);
  const { cancellablePromise } = useCancellablePromise();

  useEffect(() => {
    cancellablePromise(fetchMovies()).then(movies => setMovies(movies));
  }, []);

  if (!movies) {
    return <Loading />;
  }

  return (
    <View style={backgroundStyles.container}>
      <MoviesList navigation={navigation} movies={movies} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Universal Studios'
};
