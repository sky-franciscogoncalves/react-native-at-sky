import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableHighlight, SafeAreaView } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { MoviesListItem } from './MoviesListItem';

export const MoviesList = ({ navigation }) => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    fetchMovies().then(movies => setMovies(movies));
  }, []);

  const renderItem = ({ item }) => <MoviesListItem movie={item} navigation={navigation} />;
  const keyExtractor = m => m.id;

  return (
    <SafeAreaView>
      <FlatList data={movies} keyExtractor={keyExtractor} renderItem={renderItem} />
    </SafeAreaView>
  );
};
