import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import App from './src/App'

StatusBar.setBarStyle('light-content');

export default class AnimatedApp extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('AnimatedApp', () => AnimatedApp);
