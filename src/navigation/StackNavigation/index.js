import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BackButton from '../../components/BackButton';

import TabNavigator from '../TabNavigator';

import Player from '../../screens/Player';
import Category from '../../screens/Category';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const renderHeaderLeft = navigation => () => (
    <BackButton onPress={navigation.goBack} />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Player"
        component={Player}
        options={({ navigation }) => ({
          headerLeft: renderHeaderLeft(navigation)
        })}
      />

      <Stack.Screen
        name="Category"
        component={Category}
        options={({ navigation }) => ({
          headerLeft: renderHeaderLeft(navigation)
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
