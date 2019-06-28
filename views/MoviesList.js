import React from 'react';
import { FlatList } from 'react-native';
import { MoviesListItem } from './MoviesListItem';

export const MoviesList = ({ navigation, movies }) => {
  const renderItem = ({ item }) => <MoviesListItem movie={item} navigation={navigation} />;
  const keyExtractor = m => m.id;

  return <FlatList data={movies} keyExtractor={keyExtractor} renderItem={renderItem} />;
};