import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './Components/Main';
import SpursFacts from './Components/SpursFacts';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main" component={Main} title="Sample App" initial />
      <Scene key="spursFacts" component={SpursFacts} title="Spurs Facts" />
    </Router>
  );
};

export default RouterComponent;
