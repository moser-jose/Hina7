import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import MainTab from '../stacks/MainTab';
import Hino from '../screens/Hino';
import Config from '../screens/Configurations/Config';
const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="Hino" component={Hino} />
        
    </Stack.Navigator>
);