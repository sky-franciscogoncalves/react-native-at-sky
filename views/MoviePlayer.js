import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export const MoviePlayer = ({ playoutURI }) => {
  return (
    <Video
      source={{ uri: playoutURI }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="contain"
      shouldPlay
      isLooping
      useNativeControls
      style={styles.video}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1
  }
});
