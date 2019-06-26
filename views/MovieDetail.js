import React from 'react';
import { Platform, Text, View, Image } from 'react-native';
import { useDimensions } from '../hooks/useDimensions';
import { Button } from './Button';
import { AppConstants } from '../data/AppConstants';
import { Colors } from '../styles/colors';
import { TitleValueText } from './TitleValueText';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useResponsiveStyles } from '../hooks/useResponsiveStyles';
import { movieDetailsXsStyles as xsStyles, movieDetailsLgStyles as lgStyles } from '../styles/styles';

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
