import React, {Component, PropTypes} from 'react';
import {
    View, Image, Dimensions, TouchableOpacity, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {getStyleFromProps, getPlatformValue} from '../../utils';

const window = Dimensions.get('window');

export default class BackgroundWrapper extends Component {
    renderChildren() {
        let childrens = [];
        if (this.props.iconLeft) childrens.push(
            <TouchableOpacity key="icon_left" onPress={this.props.onPressIcon} style={{height: 35}}>
                <Icon color="#ffffff" size={25} name={this.props.iconLeft} style={styleWrapper.icon}/>
            </TouchableOpacity>
        );
        childrens.push(this.props.children);
        return childrens;
    }

    renderImageBackground() {
        const style = [
            styleWrapper.containerImage,
            getStyleFromProps(['paddingTop'], this.props)
        ]
        return <Image source={require('../../images/background.png')} style={style}>
            {this.renderChildren()}
        </Image>
    }

    renderViewBackground() {
        const style = [
            styleWrapper.containerView,
            getStyleFromProps(['paddingTop'], this.props)
        ]
        return <View style={style}>
            {this.renderChildren()}
        </View>
    }

    render() {
        if (this.props.transparent) return this.renderViewBackground();
        else return this.renderImageBackground();
    }
}

BackgroundWrapper.propTypes = {
    iconLeft: PropTypes.string,
    onPressIcon: PropTypes.func,
    paddingTop: PropTypes.number
}

const styleWrapper = {
    containerImage: {
        width: window.width,
        height: window.height,
        resizeMode: getPlatformValue('android', 'cover', 'contain'),
        paddingTop: getPlatformValue('android', 5, 22),
    },
    containerView: {
        flex: 1,
        paddingTop: getPlatformValue('android', 5, 22),
    },
    icon: {
        marginLeft: 10,
        position: 'relative',
        top: 6,
        opacity: .8,
        backgroundColor: 'transparent'
    }
}