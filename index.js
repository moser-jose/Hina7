import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import trackPlayerServices from './src/services/trackPlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(()=> trackPlayerServices);
