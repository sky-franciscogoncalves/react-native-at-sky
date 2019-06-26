import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MoviesList } from '../views/MoviesList';
import { BackgroundStyles } from './BackgroundStyles';
import Loading from '../views/Loading';
import { fetchMovies } from '../services/fetchMovies';

export const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    fetchMovies().then(movies => setMovies(movies));
  }, []);

  if (!movies) {
    return <Loading />;
  }

  return (
    <View style={BackgroundStyles.container}>
      <MoviesList navigation={navigation} movies={movies} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: Platform.select({
    web: 'Universal Studios',
    default: 'Home'
  })
};
