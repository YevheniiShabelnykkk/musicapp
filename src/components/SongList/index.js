import React from 'react';

import { View, FlatList } from 'react-native';

import PLAYLIST from '../../constants/playlist';

import SongListItem from '../SongListItem';

import styles from './styles';

const SongList = ({ navigation, isHidePlayButton }) => {
  const renderSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={PLAYLIST}
        style={styles.container}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparatorComponent}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
          <SongListItem
            item={item}
            navigation={navigation}
            isHidePlayButton={isHidePlayButton}
          />
        )}
      />
    </View>
  );
};

export default SongList;
