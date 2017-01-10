import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import * as colors from './config/colors';
import Main from './Components/Main';
import SpursFacts from './Components/SpursFacts';

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 65 }}
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navBarText}
      leftButtonTextStyle={styles.navBarText}
      backButtonTextStyle={styles.navBarText}
      leftButtonIconStyle={styles.navButtons}
    >
      <Scene key="main" component={Main} title="Sample App" initial />
      <Scene key="spursFacts" component={SpursFacts} title="Spurs Facts" />
    </Router>
  );
};

const styles = {
  navBar: {
    backgroundColor: colors.main,
  },
  navBarText: {
    color: 'white',
  },
  navButtons: {
    tintColor: 'rgb(255,255,255)',
  },
};

export default RouterComponent;
