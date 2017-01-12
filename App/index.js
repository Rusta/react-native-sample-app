import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Navigation from './Navigation';

export default class App extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
  }
  render() {
    return (
      <Navigation />
    );
  }
}
