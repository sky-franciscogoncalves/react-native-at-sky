import React from 'react';
import { Platform, StatusBar } from 'react-native';
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
import * as Font from 'expo-font';

Font.loadAsync({
  'sf-pro-text-thin': require('./assets/SF-Pro-Text-Thin.otf'),
  'sf-pro-text-light': require('./assets/SF-Pro-Text-Light.otf'),
  'sf-pro-text-regular': require('./assets/SF-Pro-Text-Regular.otf')
});

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

StatusBar.setBarStyle("light-content")

export default createApp(routes);
