import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import PlayerComponent from '../../components/PlayerComponent';

import styles from './styles';

const Player = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <PlayerComponent navigation={navigation} item={item} />
    </SafeAreaView>
  );
};

export default Player;
