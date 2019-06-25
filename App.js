import React from 'react';
import { Platform } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { MovieDetailScreen } from './screens/MovieDetailScreen';
import { MoviePlayerScreen } from './screens/MoviePlayerScreen';
1;
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { createBrowserApp } from '@react-navigation/web';
import { Colors } from './styles/colors';

const headerStyles = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.background
    },
    headerTintColor: 'white'
  }
};

const createApp = Platform.select({
  web: routes => createBrowserApp(createSwitchNavigator(routes)),
  default: screens => createAppContainer(createStackNavigator(screens, headerStyles))
});

const routes = {
  Home: {
    screen: HomeScreen,
    path: ''
  },
  MovieDetail: {
    screen: MovieDetailScreen,
    path: 'movie/:id'
  },
  MoviePlayer: {
    screen: MoviePlayerScreen,
    path: 'movie/play/:id'
  }
};

export default createApp(routes);
