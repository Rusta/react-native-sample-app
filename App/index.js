import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
  }
  render() {
    return (
      <Router />
    );
  }
}
