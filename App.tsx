import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import {BrowserView, MobileView} from 'react-device-detect';

import {View, Text, Platform, TextInput} from 'react-native';

import DrawerNav from './src/screens/drawerNav';
import {rootStackParamList} from './src/screens/rootStackParams';

import LoginScreen from './src/screens/login';

import HomeScreen from './src/screens/home';

import Form from './src/components/form';

const Stack = createNativeStackNavigator<rootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  //   if (Platform.OS === 'ios') {
  //     // do something for ios
  //   } else if (Platform.OS === 'android') {
  //     return (
  //       <View>
  //         <Text>This will be rendered on Android</Text>
  //       </View>
  //     );
  //   } else if (Platform.OS === 'web') {
  //     return (
  //       <div>
  //         <h1>This will be rendered on web</h1>
  //       </div>
  //     );
  //   } else {
  //     // you probably won't end up here unless you support another platform!
  //   }
}
