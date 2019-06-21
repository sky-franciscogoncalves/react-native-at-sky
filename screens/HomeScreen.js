import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoviesList } from '../views/MoviesList';
import { BackgroundStyles } from './BackgroundStyles';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={BackgroundStyles.container}>
        <MoviesList navigation={this.props.navigation} />
      </View>
    );
  }
}
