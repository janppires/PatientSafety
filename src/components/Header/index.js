import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Logo from '../Logo';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>      
                <View style={styles.content}><Logo style={styles.logo}/></View>
            </View>
        )
    }
}

export default Header
