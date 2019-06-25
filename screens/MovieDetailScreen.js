import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MovieDetail } from '../views/MovieDetail';
import { BackgroundStyles } from './BackgroundStyles';
import { fetchMovie } from '../services/fetchMovies';
import Loading from '../views/Loading';

export const MovieDetailScreen = ({ navigation }) => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    fetchMovie(navigation.getParam('id')).then(movie => {
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
  return {
    title: Platform.select({
      web: 'Universal Studios',
      default: title
    })
  };
};
