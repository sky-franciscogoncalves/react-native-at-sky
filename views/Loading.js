import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../styles/colors';
import { loadingStyles as styles } from '../styles/styles';

export function Loading() {
  return <ActivityIndicator style={styles.loading} size="large" color={Colors.loadingSpinner} />;
}

export default Loading;
