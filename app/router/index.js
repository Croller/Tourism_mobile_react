import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import SideBar from '../components/SideBar';
import Avia from '../components/Avia';
import Hotels from '../components/Hotels';

const Drawer = createDrawerNavigator({
  Avia: {
    screen: Avia,
  },
  Hotels: {
    screen: Hotels,
  },
}, {
  contentComponent: props => <SideBar {...props} />
});

export default createAppContainer(Drawer);
