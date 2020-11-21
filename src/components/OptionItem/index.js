import React from 'react';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const OptionItem = ({ title, style, name, size, color }) => (
  <View style={[styles.container, style]}>
    <Icon name={name} size={size} color={color} />

    <Text style={styles.text}>{title}</Text>
  </View>
);

export default OptionItem;
