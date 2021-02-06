import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() =>
  require('./src/services/trackPlayerServices'),
);
