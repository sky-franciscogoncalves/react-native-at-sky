import React from 'react';
import { View } from 'react-native';
import { MoviesListItem } from './MoviesListItem';
import { Colors } from '../styles/colors';
import { moviesListStyles as styles } from '../styles/styles';

export const MoviesList = ({ navigation, movies }) => {
  return (
    <View style={styles}>
      {movies.map(movie => (
        <MoviesListItem key={movie.id} movie={movie} navigation={navigation} />
      ))}
    </View>
  );
};
