import { StatusBar } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import * as colors from './config/colors';

const navigatorStyle = {
  navBarBackgroundColor: colors.main,
  navBarTextColor: 'white',
};

// set status bar text to white (on iOS anyway)
StatusBar.setBarStyle('light-content', true);

// register the app screens
registerScreens();

// start are app as a single screen application
Navigation.startSingleScreenApp({
  screen: {
    screen: 'MainScreen',
    title: 'Sample App',
    navigatorStyle
  }
});
