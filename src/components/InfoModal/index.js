import React from 'react';

import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CloseButton from '../CloseButton';
import OptionItem from '../OptionItem';

import OPTION_ITEMS from '../../constants/optionItems';

import styles from './styles';

const InfoModal = ({
  item,
  isVisible,
  isPlaying,
  isHidePlayButton,
  onCloseButtonPress,
  onTogglePlayButtonPress
}) => (
  <Modal transparent={true} animationType="slide" visible={isVisible}>
    <SafeAreaView style={styles.overlay} edges={['top', 'right', 'left']}>
      <View style={styles.mainContainer}>
        <CloseButton onPress={onCloseButtonPress} />

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={item.img} style={styles.image} />
          </View>

          <View style={styles.dataContainer}>
            <View style={styles.playerContainer}>
              <Text>{item.title}</Text>

              <Text style={styles.subTitle}>{item.artist}</Text>

              {!isHidePlayButton && (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={onTogglePlayButtonPress}
                >
                  {isPlaying ? (
                    <Icon name="pause" size={30} color="#fff" />
                  ) : (
                    <Icon name="play" size={30} color="#fff" />
                  )}
                </TouchableOpacity>
              )}
            </View>

            {OPTION_ITEMS.map((item, index) => (
              <OptionItem
                name={item.name}
                size={item.size}
                title={item.title}
                color={item.color}
                key={`${item.name}${item.id}`}
                style={index === OPTION_ITEMS.length - 1 && styles.noBorder}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  </Modal>
);

export default InfoModal;
