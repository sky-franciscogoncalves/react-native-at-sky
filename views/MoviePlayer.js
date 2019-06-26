import React from 'react';
import { Platform } from 'react-native';
import { Video } from 'expo-av';
import { moviePlayerStyles as styles } from '../styles/styles';

export const MoviePlayer = ({ playoutURI }) => {
  if (Platform.OS === 'web') {
    return (
      <video controls autoPlay style={styles.video}>
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
