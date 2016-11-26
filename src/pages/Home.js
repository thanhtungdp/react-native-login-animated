import React, {Component, PropTypes} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button, Logo, Heading, BackgroundWrapper, AlertStatus} from '../components';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
    handePressSignIn() {
        Actions.login();
    }

    handlePressSignUp() {
        Actions.register();
    }

    render() {
        return <BackgroundWrapper>
            <View style={loginStyle.loginContainer}>
                <Logo/>
                <Heading marginTop={89} color="#ffffff" textAlign="center">
                    {'<React Viet Nam/>'}
                </Heading>
                <Heading marginTop={16} element="h3" color="#ffffff" textAlign="center">
                    {'Animated in react'}
                </Heading>
                <Button marginTop={90} onPress={this.handePressSignIn.bind(this)}>
                    Sign in
                </Button>
            </View>
            <AlertStatus
                textHelper="Don't have account" textAction="Sign up"
                onPressAction={this.handlePressSignUp.bind(this)}
            />
        </BackgroundWrapper>
    }
}

const loginStyle = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: 69,
    },
    formContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 45
    }
})
