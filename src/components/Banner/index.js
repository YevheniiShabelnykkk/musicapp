import React from 'react';

import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import BANNERS from '../../constants/banners';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Banner = ({ navigation }) => {
  const onPlayNowButtonPress = item => () => {
    navigation.navigate('Player', { item });
  };

  const renderItem = item => (
    <View style={styles.bannerContainer}>
      <ImageBackground source={item.img} style={styles.image}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPlayNowButtonPress(item)}
        >
          <Icon name="play" size={18} color="#000" />

          <Text style={styles.text}>Play Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={BANNERS}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

export default Banner;
