import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../styles/colors';

export function Loading() {
  return (
    <ActivityIndicator
      style={{ flex: 1, backgroundColor: Colors.background }}
      size="large"
      color={Colors.loadingSpinner}
    />
  );
}

export default Loading;
