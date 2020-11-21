import React, { useEffect, useState } from 'react';

import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import PLAYLIST from '../../constants/playlist';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

import SongListItem from '../SongListItem';
import ProgressBar from '../ProgressBar';
import Controls from '../Controls';

import styles from './styles';

const PlayerComponent = ({ item, navigation }) => {
  const playbackState = usePlaybackState();

  const [playerState, setPlayetState] = useState(TrackPlayer.STATE_PAUSED);

  useEffect(() => {
    setup();

    return () => {
      TrackPlayer.reset();
      TrackPlayer.destroy();
    };
  }, []);

  const setup = async () => {
    await TrackPlayer.setupPlayer({});

    await TrackPlayer.updateOptions({
      waitForBuffer: true,
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP
      ]
    });
  };

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack == null) {
      await TrackPlayer.reset();

      await TrackPlayer.add(PLAYLIST[item.id - 1]);

      await TrackPlayer.play();

      setPlayetState(TrackPlayer.STATE_PLAYING);
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();

        setPlayetState(TrackPlayer.STATE_PLAYING);
      } else {
        await TrackPlayer.pause();

        setPlayetState(TrackPlayer.STATE_PAUSED);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={item.img} style={styles.image} />

        <View style={styles.dataContainer}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.subTitle}>{item.artist}</Text>

          <TouchableOpacity style={styles.button} onPress={togglePlayback}>
            {playerState === TrackPlayer.STATE_PAUSED && (
              <Icon name="play" size={30} color="#fff" />
            )}

            {playerState === TrackPlayer.STATE_PLAYING && (
              <Icon name="pause" size={30} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Queue</Text>

        <SongListItem
          item={item}
          navigation={navigation}
          onTogglePlayButtonPress={togglePlayback}
          isPlaying={playerState === TrackPlayer.STATE_PLAYING}
        />
      </ScrollView>

      <View style={styles.main}>
        <ProgressBar />

        <View style={styles.actions}>
          <Controls playerState={playerState} togglePlayback={togglePlayback} />
        </View>
      </View>
    </View>
  );
};

export default PlayerComponent;
