import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { MoviePlayer } from '../views/MoviePlayer';
import { Loading } from '../views/Loading';
import { backgroundStyles } from '../styles/styles';
import { fetchPlayout } from '../services/fetchPlayout';
import useCancellablePromise from '../hooks/useCancelablePromise';

export function MoviePlayerScreen({ navigation }) {
  return null;
}
