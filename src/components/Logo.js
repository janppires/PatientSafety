import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View >
                <Image
                    style={[styles.logo, this.props.style]}
                    source={require('../../assets/nhs_logo_10mm_blue_on_white.jpg')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain'
    }
})

export default Logo;