import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './App/configureStore';
import App from './App';

const store = configureStore();

const AppComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('sampleApp', () => AppComponent);
