import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar
} from 'react-native';
import App from './src/App'

StatusBar.setBarStyle('light-content');


AppRegistry.registerComponent('App', () => App);
