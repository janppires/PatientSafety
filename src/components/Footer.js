import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <Text>FOOOOOTER</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default Footer;
