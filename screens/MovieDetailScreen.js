import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MovieDetail } from '../views/MovieDetail';
import { BackgroundStyles } from './BackgroundStyles';
import { fetchMovie } from '../services/fetchMovies';

export const MovieDetailScreen = ({ navigation }) => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    fetchMovie(navigation.getParam('id')).then(movie => {
      setMovie(movie);
      navigation.setParams({ 'title': movie.title })
    });
  }, [movie])

  return (
    <View style={BackgroundStyles.container}>
      <MovieDetail movie={movie} navigation={navigation} />
    </View>
  );
}

MovieDetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title');
  return {
    title: Platform.select({
      web: `Sky Cinema - ${title}`,
      default: title
    })
  };
};