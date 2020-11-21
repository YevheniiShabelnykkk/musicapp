import React from 'react';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon name="chevron-back" size={26} color="#000" />
  </TouchableOpacity>
);

export default BackButton;
