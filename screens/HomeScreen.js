import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { MoviesList } from '../views/MoviesList';
import { BackgroundStyles } from './BackgroundStyles';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={BackgroundStyles.container}>
      <MoviesList navigation={navigation} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: Platform.select({
    web: 'Sky Cinema',
    default: 'Home'
  })
};
