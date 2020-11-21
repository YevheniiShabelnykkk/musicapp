import React from 'react';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TrackPlayer from 'react-native-track-player';

const Controls = ({ playerState, togglePlayback }) => (
  <>
    <Icon name="shuffle-variant" size={35} color="#000" />

    <Icon name="skip-backward" size={35} color="#000" />

    <TouchableOpacity onPress={togglePlayback}>
      {playerState === TrackPlayer.STATE_PAUSED && (
        <Icon name="play" size={35} color="#000" />
      )}

      {playerState === TrackPlayer.STATE_PLAYING && (
        <Icon name="pause" size={35} color="#000" />
      )}
    </TouchableOpacity>

    <Icon name="skip-forward" size={35} color="#000" />

    <Icon name="sync" size={35} color="#000" />
  </>
);

export default Controls;
