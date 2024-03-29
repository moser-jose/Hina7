import React, {useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import MainStack from './src/stacks/MainStack';
import {useStateValue} from './src/state/ContextProvider';
import AsyncStorage from '@react-native-community/async-storage';
export default () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const [state, dispach] = useStateValue();
  useEffect(() => {
    async function getStorageDarkMode() {
      const Theme = await AsyncStorage.getItem('Theme');
      if (Theme === '1') {
        dispach({
          type: 'lighTheme',
        });
        return;
      } else if (Theme === '2') {
        dispach({
          type: 'darkTheme',
        });
        return;
      } else {
        dispach({
          type: 'deviceTheme',
        });
        return;
      }
    }
    getStorageDarkMode();
  }, [dispach]);
  return (
    <ThemeProvider theme={state.theme}>
      <StatusBar
        barStyle={state.theme.statusBarStyle}
        /* backgroundColor={state.theme.container} */
        hidden={true}
        backgroundColor="transparent"
        translucent={true} /* hidden={true} */
      />
      <NavigationContainer>
        <MainStack state={state.theme.container} />
      </NavigationContainer>
    </ThemeProvider>
  );
};
