import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../styles/colors';
import { titleValueTextStyles as styles } from '../styles/styles';

export const TitleValueText = ({ title, value }) => (
  <View style={styles.titleValueTextContainer}>
    <Text style={styles.titleText}>{`${title}:`}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);
