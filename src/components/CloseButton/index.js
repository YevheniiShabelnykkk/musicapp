import React from 'react';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const CloseButton = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name="close" size={20} color="black" />
  </TouchableOpacity>
);

export default CloseButton;
