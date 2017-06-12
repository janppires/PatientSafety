import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

class Logo extends Component {
    render() {
        return (
            <View >
                <Image
                    style={[styles.logo, this.props.style]}
                    source={require('../../../assets/nhs_logo_10mm_blue.jpg')}
                />
            </View>
        )
    }
}

export default Logo;