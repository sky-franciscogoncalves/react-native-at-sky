import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableHighlight } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { MoviesListItem } from './MoviesListItem';

export const MoviesList = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    fetchMovies().then(movies => setMovies(movies));
  }, []);

  const renderItem = ({ item }) => <MoviesListItem movie={item} />;
  const keyExtractor = m => m.id;

  return <FlatList data={movies} keyExtractor={keyExtractor} renderItem={renderItem} />;
};
