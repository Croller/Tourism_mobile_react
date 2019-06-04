import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Drawer from './Drawer';
import Search from '../../view/Search';
import Map from '../../view/Map';
import Blog from '../../view/Blog';
import Account from '../../view/Account';
import About from '../../view/About';

const DrawerNav = createDrawerNavigator({
  Search: {
    screen: Search,
  },
  Map: {
    screen: Map,
  },
  Blog: {
    screen: Blog,
  },
  Account: {
    screen: Account,
  },
  About: {
    screen: About,
  },
}, {
  contentComponent: props => <Drawer {...props} />
});

export default createAppContainer(DrawerNav);
