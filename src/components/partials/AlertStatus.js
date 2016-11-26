import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextFont} from '../text';

export default class AlertStatus extends Component {
    render() {
        return <View style={style.container}>
            <TextFont fontSize={16} color="#ffffff">
                <TextFont>{this.props.textHelper}{', '}</TextFont>
                <TextFont fontWeight="700" onPress={this.props.onPressAction}>{this.props.textAction}</TextFont>
            </TextFont>
        </View>
    }
}

AlertStatus.propTypes = {
    textHelper: PropTypes.string,
    textAction: PropTypes.string,
    onPressAction: PropTypes.func
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(139, 113, 227, 0.6)',
        bottom: 0,
        right: 0,
        left: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
