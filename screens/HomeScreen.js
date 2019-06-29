import React, { useState, useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import { MoviesList } from '../views/MoviesList';
import { backgroundStyles } from '../styles/styles';
import Loading from '../views/Loading';
import { fetchMovies } from '../services/fetchMovies';
import useCancellablePromise from '../hooks/useCancelablePromise';

export const HomeScreen = ({ navigation }) => {
  const [  movies , setMovies ] = useState(undefined);
  
  useEffect(() => {
    fetchMovies().then(setMovies)
  },[])

  if (!movies) {
    return <Loading />;
  }

  return (<View style={backgroundStyles.container}>
    <MoviesList movies={movies} navigation={navigation} />
  </View>);
};

HomeScreen.navigationOptions = {
  title: 'Universal Studios'
};
