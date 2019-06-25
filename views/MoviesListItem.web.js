import React from 'react';
import { StyleSheet, Text, FlatList, TouchableWithoutFeedback, View, Image } from 'react-native';
import { fetchMovies } from '../services/fetchMovies';
import { useDimensions } from '../hooks/useDimensions';

export const TitleValueText = ({ title, value }) => (
  <View style={styles.titleValueTextContainer}>
    <Text style={styles.titleText}>{`${title}:`}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

export const MoviesListItem = ({ movie, navigation }) => {
  const { height }= useDimensions();
  const onPress = () =>
    navigation.navigate('MovieDetail', { id: movie.id });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={{ flex: 1, height: 270, borderRadius: 10, boxShadow: '3px 3px 20px 2px rgba(0,0,0,0.2)' }}
          resizeMode="cover"
          source={{ uri: movie.poster }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 16,
    minWidth: 400
  },
});
