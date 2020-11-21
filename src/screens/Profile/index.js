import React from 'react';

import { View, Image, Text } from 'react-native';

import ProfileMenuItem from '../../components/ProfileMenuItem';

import PROFILE_MENU_ITEMS from '../../constants/profileMenuItems';

import LOGO from '../../assets/icons/logo.png';

import styles from './styles';

const ProfileComponent = () => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Image source={LOGO} style={styles.image} />

      <View style={styles.dataContainer}>
        <Text style={styles.name}>Yevhenii Shabelnyk</Text>

        <Text style={styles.role}>React Native Developer</Text>
      </View>
    </View>

    <View style={styles.divider} />

    {PROFILE_MENU_ITEMS.map(item => (
      <ProfileMenuItem
        icon={item.icon}
        count={item.count}
        title={item.title}
        key={`${item.name}${item.id}`}
      />
    ))}

    <View style={styles.divider} />
  </View>
);

export default ProfileComponent;
