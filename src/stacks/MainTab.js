import React,{useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import CustomTabBar from '../components/CustomTabBar';

import Search from '../screens/Search';
import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Configurations from '../screens/Configurations';


const Tab=createBottomTabNavigator();

export default () => {
/* 
    const route=useRoute();
    const [hino, setHino]=useState({
        hinos: route.params.hinario
    });
 */
    return(
        <Tab.Navigator
        tabBar={props=><CustomTabBar {...props} />}
        initialRouteName="Home"
        /* params={hino.hinos} */
    >
        <Tab.Screen name="Search"  component={Search} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Home"  component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Configurations" component={Configurations} />
    </Tab.Navigator>
    );
};