import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export const MoviePlayer = ({ playoutURI }) => {
  if (Platform.OS === 'web') {
    return (
      <video controls autoPlay style={{height: '100vh'}} >
        <source src={playoutURI} type="video/mp4" />
      </video>
    );
  }

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
