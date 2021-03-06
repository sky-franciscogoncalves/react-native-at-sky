import React from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { AppConstants } from '../data/AppConstants';
import { Colors } from '../styles/colors';
import { movieListItemStyles as styles } from '../styles/styles';

const arrow = require('../assets/arrow.png');

export const MoviesListItem = ({ movie, navigation }) => {
  const { width } = useDimensions();
  const onPress = () => navigation.navigate('MovieDetail', { id: movie.id, movie: movie });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
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