import React, { useRef } from 'react';
import { StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/colors';
import { useHover } from 'react-native-web-hooks';
import { buttonStyles as styles } from '../styles/styles';

export const Button = ({ text, onPress, isLoading }) => {
  return (
    <TouchableOpacity style={styles.container} disabled={isLoading} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.loadingSpinner} />
      ) : (
          <Text style={styles.text}>{text}</Text>
        )}
    </TouchableOpacity>
  );
};
