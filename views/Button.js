import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#20B2AA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  text: {
    fontSize: 18,
    color: '#20B2AA'
  }
});
