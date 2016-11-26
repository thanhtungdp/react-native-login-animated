import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getStyleFromProps} from '../../utils';

export default class Logo extends Component {
    render() {
        const style = [
            logoStyle.imageContainer,
            getStyleFromProps(['marginTop'], this.props)
        ]
        return <View style={style}>
            <Image source={require('../../images/logo.png')} style={logoStyle.image} resizeMode="cover"/>
        </View>
    }
}

Logo.propTypes = {
    marginTop: PropTypes.number
}

const logoStyle = StyleSheet.create({
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 104,
        height: 104
    }
})

