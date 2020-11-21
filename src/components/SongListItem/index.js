import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import InfoModal from '../InfoModal';

import styles from './styles';

const SongListItem = ({
  item,
  isPlaying,
  navigation,
  isHidePlayButton,
  onTogglePlayButtonPress
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onItemPress = () => {
    navigation.navigate('Player', { item });
  };

  const onDotsIconPress = () => {
    setIsModalVisible(true);
  };

  const onCloseButtonPress = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <InfoModal
        item={item}
        isPlaying={isPlaying}
        isVisible={isModalVisible}
        isHidePlayButton={isHidePlayButton}
        onCloseButtonPress={onCloseButtonPress}
        onTogglePlayButtonPress={onTogglePlayButtonPress}
      />

      <TouchableWithoutFeedback style={styles.button} onPress={onItemPress}>
        <View style={styles.container}>
          <View style={styles.dataContainer}>
            <Image source={item.img} style={styles.image} />

            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.subTitle}>{item.artist}</Text>

              <Text style={styles.subTitle}>{item.duration / 60}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={onDotsIconPress}
          >
            <Icon
              size={27}
              color="gray"
              name="download"
              style={styles.iconStyles}
            />

            <Icon name="dots-vertical" color="gray" size={30} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SongListItem;
