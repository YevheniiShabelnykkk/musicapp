import React from 'react';

import { View } from 'react-native';

import { useTrackPlayerProgress } from 'react-native-track-player';

import styles from './styles';

const ProgressBar = () => {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.container}>
      <View style={[styles.redLine, { flex: progress.position }]} />

      <View
        style={[
          styles.greyLine,
          {
            flex: progress.duration - progress.position
          }
        ]}
      />
    </View>
  );
};

export default ProgressBar;
