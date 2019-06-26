import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { MoviePlayer } from '../views/MoviePlayer';
import { Loading } from '../views/Loading';
import { backgroundStyles } from '../styles/styles';
import { fetchPlayout } from '../services/fetchPlayout';
import useCancellablePromise from '../hooks/useCancelablePromise';

export function MoviePlayerScreen({ navigation }) {
  const movieId = navigation.getParam('id');
  const [playoutURI, setPlayoutURI] = useState(undefined);
  const { cancellablePromise } = useCancellablePromise();

  useEffect(() => {
    cancellablePromise(fetchPlayout(movieId)).then(uri => setPlayoutURI(uri));
  }, [movieId]);

  if (!playoutURI) {
    return <Loading />;
  }

  return (
    <View style={backgroundStyles.container}>
      <MoviePlayer playoutURI={playoutURI} />
    </View>
  );
}

MoviePlayerScreen.navigationOptions = ({ navigation }) => {};
