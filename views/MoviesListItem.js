import React from 'react';
import { StyleSheet, Text, FlatList, TouchableWithoutFeedback, View, Image } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { useDimensions } from '../hooks/useDimensions';

export const TitleValueText = ({ title, value }) => (
  <View style={styles.titleValueTextContainer}>
    <Text style={styles.titleText}>{`${title}:`}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

export const MoviesListItem = ({ movie, navigation }) => {
  const dimensions = useDimensions();
  const onPress = () =>
    navigation.navigate('MovieDetail', {
      movie
    });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={{ flex: 1, height: dimensions.window.height / 3 }}
          resizeMode="contain"
          source={{ uri: movie.poster }}
        />
        <View style={styles.movieInfoContainer}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Text style={styles.arrow}> > </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 16
  },
  movieInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  movieTitle: {
    color: 'black',
    fontSize: 23
  },
  arrow: {
    color: 'black',
    fontSize: 23
  }
});
