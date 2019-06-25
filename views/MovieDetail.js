import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { Button } from './Button';
import { purchaseMovie, hasEntitlementForId } from '../services/purchaseMovie';
import { fetchPlayout } from '../services/fetchPlayout';
import { AppConstants } from '../data/AppConstants.web';
import { Colors } from '../styles/colors';

export const TitleValueText = ({ title, value }) => (
  <View style={styles.titleValueTextContainer}>
    <Text style={styles.titleText}>{`${title}:`}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

export const MovieDetail = ({ movie = {}, navigation }) => {
  const { width, scale } = useDimensions();
  const [movieIsBought, setMovieIsBought] = useState(false);
  const [movieIsBeingPurchased, setMovieIsBeingPurchased] = useState(false);

  useEffect(() => {
    hasEntitlementForId(movie.id).then(setMovieIsBought);
  }, [movie]);

  const onPress = async () => {
    if (movieIsBought) {
      navigation.navigate('MoviePlayer', { id: movie.id });
    } else {
      setMovieIsBeingPurchased(true);
      await purchaseMovie(movie.id);
      const hasEntitlement = await hasEntitlementForId(movie.id);
      setMovieIsBought(hasEntitlement);
      setMovieIsBeingPurchased(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ flex: 1, height: width * AppConstants.getAspectRatio(scale) }}
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
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 16
  },
  titleValueTextContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  titleText: {
    color: Colors.text,
    width: 100
  },
  valueText: {
    flex: 1,
    flexWrap: 'wrap',
    color: Colors.text
  },
  movieTitle: {
    color: Colors.text,
    fontSize: 25,
    flexShrink: 2
  },
  text: {
    color: Colors.text,
    marginBottom: 16
  }
});
