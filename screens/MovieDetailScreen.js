import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MovieDetail } from '../views/MovieDetail';
import { BackgroundStyles } from './BackgroundStyles';

export class MovieDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const movie = navigation.getParam('movie');
    return {
      title: movie && movie.title
    };
  };

  render() {
    const movie = this.props.navigation.getParam('movie');

    return (
      <View style={BackgroundStyles.container}>
        <MovieDetail movie={movie} navigation={this.props.navigation} />
      </View>
    );
  }
}
