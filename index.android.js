import React, { Component } from 'react';
import {
    AppRegistry,
    StatusBar
} from 'react-native';
import App from './src/App'

StatusBar.setHidden(true);


AppRegistry.registerComponent('App', () => App);
