import React from 'react';
import { Platform, Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { AppConstants } from '../data/AppConstants';
import { movieListItemStyles as styles } from '../styles/styles';
import { isWeb } from '../utils/platform';

/*
// Web styles!
web: { borderRadius: 10, flex: 1, width: width / 3.5, height: width / 3.5 * AppConstants.aspectRatio},
*/

const arrow = require('../assets/arrow.png');

export const MoviesListItem = ({ movie }) => {
  const { width } = useDimensions();

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          style={{ flex: 1, width, height: width * AppConstants.aspectRatio }}
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
