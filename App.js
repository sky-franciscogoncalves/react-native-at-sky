import React from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { MovieDetailScreen } from './screens/MovieDetailScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  MovieDetail: {
    screen: MovieDetailScreen
  }
});

export default createAppContainer(AppNavigator);
