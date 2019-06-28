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
  return null;
};
