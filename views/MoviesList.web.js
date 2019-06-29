import React from 'react';
import { View, FlatList } from 'react-native';
import { MoviesListItem } from './MoviesListItem';
import { moviesListStyles as styles } from '../styles/styles';

export const MoviesList = ({ navigation, movies }) => {
  return (<View style={styles}>
    {movies.map(movie => <MoviesListItem movie={movie} navigation={navigation} key={movie.id} />)}
  </View>)
};