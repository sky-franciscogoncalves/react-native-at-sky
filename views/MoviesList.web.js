import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { MoviesListItem } from './MoviesListItem';
import { Colors } from '../styles/colors';


export const MoviesList = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <View style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gridRowGap: '20px',
      gridColumnGap: '20px',
      backgroundColor: Colors.background,
      padding: 16
    }}>
      {movies.map((movie) => <MoviesListItem key={movie.id} movie={movie} navigation={navigation} />)}
    </View>
  );
};
