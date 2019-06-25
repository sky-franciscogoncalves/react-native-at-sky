import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { MoviesListItem } from './MoviesListItem';

export const MoviesList = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <View
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gridRowGap: '10px',
        gridColumnGap: '10px',
        backgroundColor: Colors.background
      }}
    >
      {movies.map(movie => (
        <MoviesListItem key={movie.id} movie={movie} navigation={navigation} />
      ))}
    </View>
  );
};
