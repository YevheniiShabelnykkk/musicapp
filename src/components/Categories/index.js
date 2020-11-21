import React from 'react';

import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import CATEGORIES from '../../constants/categories';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Categories = ({ navigation }) => {
  const goToDetails = item => () => {
    navigation.navigate('Category', { item });
  };

  const renderItem = item => (
    <TouchableWithoutFeedback onPress={goToDetails(item)}>
      <View style={styles.imageContainer}>
        <ImageBackground source={item.img} style={styles.image} blurRadius={3}>
          <Icon name="music" color="#fff" size={22} />

          <Text style={styles.name}>{item.name}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        data={CATEGORIES}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => `${item.name}${item.id}`}
      />
    </View>
  );
};

export default Categories;
