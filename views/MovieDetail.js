import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { Button } from './Button';
import { AppConstants } from '../data/AppConstants';
import { Colors } from '../styles/colors';
import { TitleValueText } from './TitleValueText';

export const MovieDetail = ({ movie, movieIsBought, movieIsBeingPurchased, navigation, onPress }) => {
  const { width } = useDimensions();

  return (
    <View style={styles.container}>
      <Image
        style={{ flexGrow: 0, height: width * AppConstants.aspectRatio }}
        resizeMode="contain"
        source={{ uri: movie.poster }}
      />
      <View style={styles.movieInfoContainer}>
        <View style={styles.titleBuyContainer}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Button text={movieIsBought ? 'Play' : 'Buy'} isLoading={movieIsBeingPurchased} onPress={onPress} />
        </View>
        <TitleValueText title="Genre" value={movie.genre && movie.genre.join(', ')} />
        <TitleValueText title="Directors" value={movie.directors} />
        <TitleValueText title="Actors" value={movie.actors && movie.actors.join(', ')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  titleBuyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
    marginTop: 8
  },
  movieInfoContainer: {
    marginHorizontal: 16
  },
  movieTitle: {
    color: Colors.text,
    fontSize: 25,
    flexShrink: 2,
    fontFamily: 'sf-pro-text-regular'
  },
  text: {
    color: Colors.text,
    marginBottom: 16,
    fontFamily: 'sf-pro-text-light'
  }
});
