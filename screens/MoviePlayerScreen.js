import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { MoviePlayer } from '../views/MoviePlayer';
import { Loading } from '../views/Loading';
import { BackgroundStyles } from './BackgroundStyles';
import { fetchPlayout } from '../services/fetchPlayout';

export function MoviePlayerScreen({ navigation }) {
  const movieId = navigation.getParam('id');
  const [playoutURI, setPlayoutURI] = useState(undefined);

  useEffect(() => {
    setTimeout(() => fetchPlayout(movieId).then(setPlayoutURI), 1000);
  }, [movieId])

  if (!playoutURI) {
    return <Loading />;
  }

  return <View style={BackgroundStyles.container}><MoviePlayer playoutURI={playoutURI} /></View>;
}

MoviePlayerScreen.navigationOptions = ({ navigation }) => {};