import React from 'react';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const ProfileMenuItem = ({ icon, title, count }) => (
  <View style={styles.options}>
    <View style={styles.left}>
      <Icon name={icon} size={30} color="#000" />

      <Text style={styles.title}>{title}</Text>
    </View>

    <View style={styles.left}>
      <Text style={styles.title}>{count}</Text>

      <Icon2
        name="ios-arrow-forward"
        size={30}
        color="gray"
        style={styles.arrowIcon}
      />
    </View>
  </View>
);

export default ProfileMenuItem;
