import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { MoviesList } from '../views/MoviesList';
import { backgroundStyles } from '../styles/styles';
import Loading from '../views/Loading';
import { fetchMovies } from '../services/fetchMovies';
import useCancellablePromise from '../hooks/useCancelablePromise';

export const HomeScreen = ({ navigation }) => {
  return null;
};

HomeScreen.navigationOptions = {
  title: 'Universal Studios'
};
