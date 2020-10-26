import React,{useState} from 'react';
import {StatusBar,useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import MainStack from './src/stacks/MainStack';
import themes from './src/assets/themes/themes';

export default () => {
  const deviceTheme=useColorScheme();
  const [dark, setDark]=useState(true);
  console.log(deviceTheme);
  const theme =themes[deviceTheme] || themes.light;
  
  return(
    <ThemeProvider theme={theme}>
      <StatusBar  
      barStyle={deviceTheme ? "dark-content":"light-content" }
      backgroundColor={deviceTheme ? theme.container : theme.container}   />
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </ThemeProvider>
    
  );
}