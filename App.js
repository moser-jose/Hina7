import React,{useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import MainStack from './src/stacks/MainStack';
import ThemeLight from './src/assets/themes/light';
import ThemeDark from './src/assets/themes/dark';
export default () => {
  const [dark, setDark]=useState(false);
  return(
    <ThemeProvider theme={dark ? ThemeDark : ThemeLight}>
      <StatusBar  
      barStyle={dark ? "light-content" : "dark-content"}
      backgroundColor={dark ? ThemeDark.container : ThemeLight.container}   />
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </ThemeProvider>
    
  );
}