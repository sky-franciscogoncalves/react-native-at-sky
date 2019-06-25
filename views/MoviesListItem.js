import React from 'react';
import { StyleSheet, Text, FlatList, TouchableWithoutFeedback, View, Image } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { useDimensions } from '../hooks/useDimensions';
import { AppConstants } from '../data/AppConstants';
import { Colors } from '../styles/colors';
const arrow = require('../assets/arrow.png');

export const TitleValueText = ({ title, value }) => (
  <View style={styles.titleValueTextContainer}>
    <Text style={styles.titleText}>{`${title}:`}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

export const MoviesListItem = ({ movie, navigation }) => {
  const { height, width, scale } = useDimensions();
  const onPress = () => navigation.navigate('MovieDetail', { id: movie.id, movie: movie });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={{ flex: 1, width, height: width * AppConstants.getAspectRatio(scale) }}
          resizeMode="contain"
          source={{ uri: movie.poster }}
        />
        <View style={styles.movieInfoContainer}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Image resizeMode="contain" style={styles.arrow} source={arrow} />
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
    marginTop: 8,
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  movieTitle: {
    color: Colors.text,
    fontSize: 18,
    fontFamily: 'sf-pro-text-regular'
  },
  arrow: {
    width: 16,
    height: 16
  }
});
