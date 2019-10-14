import React from 'react';
import { FlatList } from 'react-native';
import { MoviesListItem } from './MoviesListItem';
import { isWeb } from '../utils/platform';

export const MoviesList = ({ navigation, movies }) => {
    const renderItem = ({ item }) => <MoviesListItem navigation={navigation} movie={item} />;

    return <FlatList style={{ margin: 'auto' }} numColumns={isWeb ? 3 : 1} data={movies} keyExtractor={m => m.id} renderItem={renderItem} />;
};
