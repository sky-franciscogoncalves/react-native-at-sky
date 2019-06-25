import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { MoviesListItem } from './MoviesListItem';
import Loading from './Loading';

export const MoviesList = ({ navigation, movies }) => {
  const renderItem = ({ item }) => <MoviesListItem movie={item} navigation={navigation} />;
  const keyExtractor = m => m.id;

  return <FlatList data={movies} keyExtractor={keyExtractor} renderItem={renderItem} />;
};
