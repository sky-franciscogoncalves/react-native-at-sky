import React from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { MovieDetailScreen } from './screens/MovieDetailScreen';
import { MoviePlayerScreen } from './screens/MoviePlayerScreen';
1;
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  MovieDetail: {
    screen: MovieDetailScreen
  },
  MoviePlayer: {
    screen: MoviePlayerScreen
  }
});

export default createAppContainer(AppNavigator);
