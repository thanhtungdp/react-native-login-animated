import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {BackgroundWrapper} from './components';
import {Home, Login, Register} from './pages';

export default class App extends Component {
    render(){
        return <BackgroundWrapper paddingTop={0}>
            <Router>
                <Scene key="home" component={Home} initial hideNavBar/>
                <Scene key="login" component={Login} hideNavBar/>
                <Scene key="register" component={Register} hideNavBar/>
            </Router>
        </BackgroundWrapper>
    }
}