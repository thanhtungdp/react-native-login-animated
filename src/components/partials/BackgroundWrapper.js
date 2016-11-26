import React, {Component, PropTypes} from 'react';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getStyleFromProps} from '../../utils';

const window = Dimensions.get('window');

export default class BackgroundWrapper extends Component {
    render() {
        const style = [
            styleWrapper.container,
            getStyleFromProps(['paddingTop'], this.props)
        ]
        return <Image source={require('../../images/background.png')} style={style}>
            {this.props.iconLeft &&
            <TouchableOpacity onPress={this.props.onPressIcon}>
                <Icon color="#ffffff" size={25} name={this.props.iconLeft} style={styleWrapper.icon}/>
            </TouchableOpacity>
            }
            {this.props.children}
        </Image>
    }
}

BackgroundWrapper.propTypes = {
    iconLeft: PropTypes.string,
    onPressIcon: PropTypes.func,
    paddingTop: PropTypes.number
}

const styleWrapper = {
    container: {
        width: window.width,
        height: window.height,
        resizeMode: "contain",
        paddingTop: 22
    },
    icon: {
        marginLeft: 10,
        position: 'relative',
        top: 6,
        opacity: .8,
        backgroundColor: 'transparent'
    }
}