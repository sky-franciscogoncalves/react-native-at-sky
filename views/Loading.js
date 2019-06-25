import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../styles/colors';

export function Loading() {
  return <ActivityIndicator style={{ backgroundColor: Colors.background, flex: 1 }} size="large" color={Colors.loadingSpinner} />;
}

export default Loading;
