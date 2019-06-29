import React from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { AppConstants } from '../data/AppConstants';
import { Colors } from '../styles/colors';
import { movieListItemStyles as styles } from '../styles/styles';

const arrow = require('../assets/arrow.png');

export const MoviesListItem = ({ movie, navigation }) => {
  const onPress = () => navigation.navigate('MovieDetail', { id: movie.id });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: movie.poster }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};