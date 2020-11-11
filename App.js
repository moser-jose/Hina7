import React,{useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import MainStack from './src/stacks/MainStack';
import {useStateValue} from './src/state/ContextProvider';
import AsyncStorage from '@react-native-community/async-storage';
export default () => {

  const [state,dispach]=useStateValue();

  useEffect(()=>{
    async function getStorageDarkMode(){
      const Theme= await AsyncStorage.getItem("Theme");
    
      if(Theme=== '1'){
          dispach({
            type:'lighTheme'
          });
          return;
      }
      else if(Theme=== '2'){
        dispach({
          type:'darkTheme'
        });
        return;
      }
      else{
        dispach({
          type:'deviceTheme'
        });
        return;
      }
    
    }
    getStorageDarkMode();
  },[]);
  return(
    <ThemeProvider theme={state.theme}>
      <StatusBar  
      barStyle={state.theme.statusBarStyle }
      backgroundColor={state.theme.container}   />
      <NavigationContainer>
        <MainStack  state={state.theme.container}/>
      </NavigationContainer>
    </ThemeProvider>
  );
}