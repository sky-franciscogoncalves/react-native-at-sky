import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import Loading from './Loading';

export const Button = ({ text, onPress, isLoading }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {isLoading ? <Loading /> : <Text style={styles.text}>{text}</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  text: {
    fontSize: 18,
    color: Colors.button
  }
});
