import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Logo from '../Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>      
                <Logo style={styles.logo}/>
                <Icon style={styles.search} name={'magnify'} size={27} />
            </View>
        )
    }
}

export default Header
