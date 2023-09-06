// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from '../App';
import EventDetail from './pages/EventDetail';
import SelectedPlaces from './pages/SelectedPlaces';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="SelectedPlaces" component={SelectedPlaces} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;