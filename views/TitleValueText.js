import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styles/colors';

export const TitleValueText = ({ title, value }) => (
  <View style={styles.titleValueTextContainer}>
    <Text style={styles.titleText}>{`${title}:`}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  titleValueTextContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  titleText: {
    color: Colors.text,
    width: 100,
    fontFamily: 'sf-pro-text-thin',
    fontSize: 16
  },
  valueText: {
    flex: 1,
    flexWrap: 'wrap',
    color: Colors.text,
    fontFamily: 'sf-pro-text-light'
  }
});
