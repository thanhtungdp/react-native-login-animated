import React, {Component, PropTypes} from 'react';
import {
    View, Text, Image, StyleSheet, Animated, InteractionManager, Alert
} from 'react-native';
import {Input, Button, Logo, Heading, BackgroundWrapper, AlertStatus} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {getPlatformValue} from '../utils';

export default class Login extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        animation: {
            headerPositionTop: new Animated.Value(-148),
            formPositionLeft: new Animated.Value(614),
            buttonPositionTop: new Animated.Value(1354)
        }
    }

    handleChangeInput(stateName, text) {
        this.setState({
            [stateName]: text
        })
    }

    handleRegister() {
        Alert.alert(
            'Button press',
            'Created user'
        )
    }

    unmountComponent(callback) {
        const timing = Animated.timing;
        Animated.parallel([
            timing(this.state.animation.headerPositionTop, {
                toValue: -148,
                duration: 400,
                delay: 100
            }),
            timing(this.state.animation.formPositionLeft, {
                toValue: 614,
                duration: 500,
                delay: 120
            }),
            timing(this.state.animation.buttonPositionTop, {
                toValue: 1354,
                duration: 400,
                delay: 130
            })
        ]).start(callback);
    }

    handleBack() {
        this.unmountComponent(() => {
            Actions.pop();
        })
    }

    handleLogin() {
        this.unmountComponent(() => {
            Actions.login();
        })
    }

    componentDidMount() {
        Animated.timing(this.state.animation.headerPositionTop, {
            toValue: 0,
            duration: 725,
            delay: 100
        }).start();
        Animated.timing(this.state.animation.formPositionLeft, {
            toValue: 0,
            duration: 700,
            delay: 120
        }).start();
        Animated.timing(this.state.animation.buttonPositionTop, {
            toValue: 0,
            duration: 600,
            delay: 130
        }).start();
    }

    render() {
        return <BackgroundWrapper iconLeft="chevron-left" onPressIcon={this.handleBack.bind(this)}>
            <View style={loginStyle.loginContainer}>
                <Animated.View style={{position: 'relative', top: this.state.animation.headerPositionTop}}>
                    <Heading color="#ffffff" textAlign="center">
                        {'Sign up'}
                    </Heading>
                </Animated.View>
                <Logo marginTop={25}/>
                <View style={loginStyle.formContainer}>
                    <Animated.View style={{position: 'relative', left: this.state.animation.formPositionLeft}}>
                        <Input label="Username"
                               icon={<Icon name="user"/>}
                               value={this.state.username}
                               onChange={this.handleChangeInput.bind(this, 'username')}
                        />
                        <Input label="Email"
                               icon={<Icon name="envelope-o"/>}
                               value={this.state.password}
                               marginTop={23}
                               onChange={this.handleChangeInput.bind(this, 'email')}
                        />
                        <Input label="Password"
                               icon={<Icon name="key"/>}
                               value={this.state.password}
                               marginTop={23}
                               onChange={this.handleChangeInput.bind(this, 'password')}
                               secureTextEntry
                        />
                    </Animated.View>
                    <Animated.View style={{position: 'relative', top: this.state.animation.buttonPositionTop}}>
                        <Button marginTop={getPlatformValue('android',25, 38)} width={200} onPress={this.handleRegister.bind(this)}>
                            Create
                        </Button>
                    </Animated.View>
                </View>
            </View>
            <AlertStatus textHelper="You're ready account" textAction="Login"
                         onPressAction={this.handleLogin.bind(this)}></AlertStatus>
        </BackgroundWrapper>
    }
}

const loginStyle = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: getPlatformValue('android', 10, 30),
    },
    formContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: getPlatformValue('android', 5, 34)
        //backgroundColor: '#ffffff'
    }
})
