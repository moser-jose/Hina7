import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import CustomTabBar from '../components/CustomTabBar';

import Search from '../screens/Search';
import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Configurations from '../screens/Configurations';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="Home">
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Configurations" component={Configurations} />
    </Tab.Navigator>
  );
};
