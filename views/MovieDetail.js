import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { Button } from './Button';
import { AppConstants } from '../data/AppConstants';
import { Colors } from '../styles/colors';
import { TitleValueText } from './TitleValueText';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useResponsiveStyles } from '../hooks/useResponsiveStyles';

export const MovieDetail = ({ movie, movieIsBought, movieIsBeingPurchased, navigation, onPress }) => {
  const { width } = useDimensions();
  const styles = useResponsiveStyles({ xs: xsStyles, lg: lgStyles });

  return (
    <View style={styles.container}>
      <Image
        style={Platform.select({
          web: styles.image,
          default: [styles.image, { height: width * AppConstants.aspectRatio }]
        })}
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

const commonStyles = StyleSheet.create({
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

const xsStyles = StyleSheet.flatten([
  commonStyles,
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    image: {
      flexGrow: 0,
      height: Platform.select({
        web: `calc(100vw * ${AppConstants.aspectRatio})`,
        default: undefined
      })
    },
    movieInfoContainer: {
      marginHorizontal: 16
    }
  })
]);

const lgStyles = StyleSheet.flatten([
  commonStyles,
  StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    movieInfoContainer: {
      width: '50%',
      padding: 20
    },
    image: {
      width: '50%',
      height: `calc(50vw * ${AppConstants.aspectRatio})`
    }
  })
]);
