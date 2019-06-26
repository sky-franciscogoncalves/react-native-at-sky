import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MovieDetail } from '../views/MovieDetail';
import { BackgroundStyles } from './BackgroundStyles';
import { fetchMovie } from '../services/fetchMovies';
import { purchaseMovie, hasEntitlementForId } from '../services/purchaseMovie';
import Loading from '../views/Loading';
import useCancellablePromise from '../hooks/useCancelablePromise';

export const MovieDetailScreen = ({ navigation }) => {
  const [movie, setMovie] = useState(navigation.getParam('movie'));
  const [movieIsBought, setMovieIsBought] = useState(false);
  const [movieIsBeingPurchased, setMovieIsBeingPurchased] = useState(false);
  const { cancellablePromise } = useCancellablePromise();

  useEffect(() => {
    cancellablePromise(hasEntitlementForId(movie.id).then(setMovieIsBought));
  }, [movie]);

  useEffect(() => {
    cancellablePromise(fetchMovie(navigation.getParam('id'))).then(movie => {
      setMovie(movie);
      if (Platform.OS !== 'web') {
        navigation.setParams({ title: movie.title });
      }
    });
  }, [movie]);

  const onPress = async () => {
    if (movieIsBought) {
      navigation.navigate('MoviePlayer', { id: movie.id });
    } else {
      setMovieIsBeingPurchased(true);
      await cancellablePromise(purchaseMovie(movie.id));
      const hasEntitlement = await cancellablePromise(hasEntitlementForId(movie.id));
      setMovieIsBought(hasEntitlement);
      setMovieIsBeingPurchased(false);
    }
  };

  if (!movie) {
    return <Loading />;
  }

  return (
    <View style={BackgroundStyles.container}>
      <MovieDetail
        movie={movie}
        movieIsBought={movieIsBought}
        movieIsBeingPurchased={movieIsBeingPurchased}
        navigation={navigation}
        onPress={onPress}
      />
    </View>
  );
};

MovieDetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title');
  const movie = navigation.getParam('movie');
  return {
    title: Platform.select({
      web: 'Universal Studios',
      default: movie && movie.title
    })
  };
};
