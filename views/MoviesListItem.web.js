import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native';

export const MoviesListItem = ({ movie, navigation }) => {
  const onPress = () => navigation.navigate('MovieDetail', { id: movie.id });

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
  }
});
