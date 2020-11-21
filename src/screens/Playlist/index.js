import React from 'react';

import { Text, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Banner from '../../components/Banner';
import Categories from '../../components/Categories';
import SongList from '../../components/SongList';

import styles from './styles';

const Playlist = ({ navigation }) => {
  const renderListHeaderComponent = () => (
    <>
      <Banner navigation={navigation} />
      <Categories navigation={navigation} />
    </>
  );

  const renderListFooterComponent = () => (
    <>
      <Text style={styles.title}>Songs</Text>

      <SongList navigation={navigation} isHidePlayButton />
    </>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
      <Text style={styles.title}>Music App</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeaderComponent}
        ListFooterComponent={renderListFooterComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default Playlist;
