import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';

export const TitleValueText = ({ title, value }) => (
  <View style={styles.titleValueTextContainer}>
    <Text style={styles.titleText}>{`${title}:`}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

export const MovieDetail = ({ movie }) => {
  const dimensions = useDimensions();
  return (
    <View style={styles.container}>
      <Image
        style={{ flex: 1, height: dimensions.window.height / 3 }}
        resizeMode="contain"
        source={{ uri: movie.poster }}
      />
      <View style={styles.movieInfoContainer}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <TitleValueText title="Genre" value={movie.genre.join(', ')} />
        <TitleValueText title="Directors" value={movie.directors} />
        <TitleValueText title="Actors" value={movie.actors.join(', ')} />
      </View>
    </View>
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
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginHorizontal: 16
  },
  titleValueTextContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  titleText: {
    color: 'black',
    width: 100
  },
  valueText: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'black'
  },
  movieTitle: {
    color: 'black',
    fontSize: 25,
    marginBottom: 16
  },
  text: {
    color: 'black',
    marginBottom: 16
  }
});
