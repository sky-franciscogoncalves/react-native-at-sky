import React from 'react';
import { Platform, Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { AppConstants } from '../data/AppConstants';
import { movieListItemStyles as styles } from '../styles/styles';
import { isWeb } from '../utils/platform';

const arrow = require('../assets/arrow.png');

export const MoviesListItem = ({ navigation, movie }) => {
  const { width } = useDimensions();
  const onPress = () => navigation.navigate('MovieDetail', { id: movie.id });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={Platform.select({
            web: { borderRadius: 10, flex: 1, width: width / 3.5, height: width / 3.5 * AppConstants.aspectRatio},
            default: { flex: 1, width, height: width * AppConstants.aspectRatio }
          })}
          resizeMode="contain"
          source={{ uri: movie.poster }}
        />
        {!isWeb && (
          <View style={styles.movieInfoContainer}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Image resizeMode="contain" style={styles.arrow} source={arrow} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
