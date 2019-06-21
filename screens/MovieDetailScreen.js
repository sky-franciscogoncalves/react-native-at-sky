import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MovieDetail } from '../views/MovieDetail';

export class MovieDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail'
  };

  static navigationOptions = ({ navigation }) => {
    const movie = navigation.getParam('movie');
    const title = movie && movie.title;
    return {
      title
    };
  };

  render() {
    const movie = this.props.navigation.getParam('movie');

    return (
      <View style={styles.background}>
        <MovieDetail movie={movie} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f9f9f9',
    flex: 1
  },
  container: {
    // maxWidth: 800
  },
  text: {
    color: 'black'
  }
});
