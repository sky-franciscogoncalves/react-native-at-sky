import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoviesList } from '../views/MoviesList';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <MoviesList navigation={this.props.navigation} />
        </View>
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
