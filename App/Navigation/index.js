import React from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import * as colors from '../config/colors';
import MainScreen from './screens/Main';
import SpursFactsScreen from './screens/SpursFacts';

const Router = createRouter(() => ({
  main: () => MainScreen,
  spursFacts: () => SpursFactsScreen,
}));

const navStyles = {
  navigationBar: {
    backgroundColor: colors.main,
    tintColor: 'white',
  }
};

class Nav extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          initialRoute={'main'}
          defaultRouteConfig={navStyles}
        />
      </NavigationProvider>
    );
  }
}

export default Nav;
