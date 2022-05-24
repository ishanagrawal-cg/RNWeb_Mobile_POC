import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './home';
import ProfileScreen from './profile';
import DetailScreen from './details';

import {rootDrawerParamList} from './rootDrawerParams';

const Drawer = createDrawerNavigator<rootDrawerParamList>();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
