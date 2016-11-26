import React, {Component, PropTypes} from 'react';
import {
    View, Text, Image, StyleSheet, Animated, InteractionManager
} from 'react-native';
import {Button, Logo, Heading, BackgroundWrapper, AlertStatus} from '../components';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
    state = {
        logoPositionTop: new Animated.Value(-228),
        groupHeadingPositionLeft: new Animated.Value(-614),
        buttonPositionLeft: new Animated.Value(-696),
        statusPositionTop: new Animated.Value(1200)
    };

    handePressSignIn() {
        Actions.login();
    }

    handlePressSignUp() {
        Actions.register();
    }

    animateHome(){
        const timingToZero = (stateValue) => Animated.timing(
            stateValue,
            {
                toValue: 0,
                duration: 700
            }
        )
        Animated.sequence([
            Animated.delay(20),
            Animated.parallel([
                timingToZero(this.state.logoPositionTop),
                timingToZero(this.state.groupHeadingPositionLeft),
                timingToZero(this.state.buttonPositionLeft),
                Animated.timing(this.state.statusPositionTop, {
                    toValue: 0,
                    duration: 700
                })
            ])
        ]).start()
    }

    componentDidMount(){
        if(this.props.disableInteractionCheck) {
            this.animateHome();
        }
        else {
            InteractionManager.runAfterInteractions(() => {
                this.animateHome();
            })
        }
    }

    render() {
        return <BackgroundWrapper>
            <View style={loginStyle.loginContainer}>
                <Animated.View style={{position: 'relative', top: this.state.logoPositionTop}}>
                    <Logo/>
                </Animated.View>
                <Animated.View style={{position: 'relative', left: this.state.groupHeadingPositionLeft}}>
                    <Heading marginTop={89} color="#ffffff" textAlign="center">
                        {'<React Viet Nam/>'}
                    </Heading>
                    <Heading marginTop={16} element="h3" color="#ffffff" textAlign="center">
                        {'Animated in react'}
                    </Heading>
                </Animated.View>
                <Animated.View style={{position: 'relative', left: this.state.buttonPositionLeft}}>
                    <Button marginTop={90} onPress={this.handePressSignIn.bind(this)}>
                        Sign in
                    </Button>
                </Animated.View>
            </View>
            <Animated.View style={{position: 'relative', top: this.state.statusPositionTop}}>
                <AlertStatus
                    textHelper="Don't have account" textAction="Sign up"
                    onPressAction={this.handlePressSignUp.bind(this)}
                />
            </Animated.View>
        </BackgroundWrapper>
    }
}

Home.propTypes = {
    disableInteractionCheck: PropTypes.bool
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
