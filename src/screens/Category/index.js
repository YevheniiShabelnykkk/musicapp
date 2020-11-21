import React from 'react';

import { View, Text, Image } from 'react-native';

import SongList from '../../components/SongList';

import styles from './styles';

const Category = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={item.img} style={styles.image} />

        <Text style={styles.title}>{item.name}</Text>
      </View>

      <Text style={styles.text}>Songs</Text>

      <SongList navigation={navigation} isHidePlayButton />
    </View>
  );
};

export default Category;
