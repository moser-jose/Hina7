import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import MainTab from '../stacks/MainTab';
import Hino from '../screens/Hino';
import Config from '../screens/Configurations/Config';
import Sobre from '../screens/Configurations/Sobre';
import Categorie from '../screens/Categories/Categorie';
import HinosSubCategoria from '../screens/Hino/ListarHinosSubCategoria/HinosSubCategoria';
import AllCategories from '../screens/Categories/AllCategories';

import HinosTodos from '../screens/Home/HinosTodos';
const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown:false,
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="Hino" component={Hino} />
        <Stack.Screen name="Categorie" component={Categorie} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="HinosSubCategoria" component={HinosSubCategoria} />
        <Stack.Screen name="AllCategories" component={AllCategories} />
        <Stack.Screen name="HinosTodos" component={HinosTodos} />
        
        
    </Stack.Navigator>
);