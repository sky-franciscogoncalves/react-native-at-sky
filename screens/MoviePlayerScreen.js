import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoviePlayer } from '../views/MoviePlayer';
import { BackgroundStyles } from './BackgroundStyles';

export class MoviePlayerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {};

  render() {
    const playoutURI = this.props.navigation.getParam('playoutURI');

    return <View style={BackgroundStyles.container}>{<MoviePlayer playoutURI={playoutURI} />}</View>;
  }
}
