import React from 'react';
import { ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <ActivityIndicator style={{flex: 1}} size="large" color="#0000ff" />
  );
}

export default Loading;