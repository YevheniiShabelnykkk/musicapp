import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import Playlist from '../../screens/Playlist';
import Profile from '../../screens/Profile';

import { fontScaleNormalize } from '../../helpers/fontScaleNormalize';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabBarIcon = route => {
    if (route.name === 'Playlist') {
      return <Icon name="playlist" size={20} color="black" />;
    } else if (route.name === 'Profile') {
      return <Icon2 name="user" size={20} color="black" />;
    }
  };

  const tabBarOptions = {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: fontScaleNormalize(12)
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => tabBarIcon(route)
      })}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Playlist" component={Playlist} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
