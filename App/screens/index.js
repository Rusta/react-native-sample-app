import { Navigation } from 'react-native-navigation';

import MainScreen from './MainScreen';
import SpursFactsScreen from './SpursFactsScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('MainScreen', () => MainScreen);
  Navigation.registerComponent('SpursFactsScreen', () => SpursFactsScreen);
}
