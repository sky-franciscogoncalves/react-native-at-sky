import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { Video } from 'expo-av';
import { fetchMovies } from './services/fetchMovies';
import { fetchPlayout } from './services/fetchPlayout';
import { purchaseMovie } from './services/purchaseMovie';
import { MoviesList } from './views/MoviesList';

export const App = () => (
  <View style={styles.background}>
    <View style={styles.container}>
      <MoviesList />
    </View>
  </View>
);

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    maxWidth: 800
  },
  text: {
    color: 'black'
  }
});
