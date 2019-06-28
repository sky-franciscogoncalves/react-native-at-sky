import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/colors';
import { buttonStyles as styles } from '../styles/styles';

export const Button = ({ text, onPress, isLoading }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {isLoading ? (
      <ActivityIndicator size="small" color={Colors.loadingSpinner} />
    ) : (
      <Text style={styles.text}>{text}</Text>
    )}
  </TouchableOpacity>
);
