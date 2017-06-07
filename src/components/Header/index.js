import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Logo from '../Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>      
                <Logo style={styles.logo}/>
                <TouchableOpacity style={styles.searchButton} onPress={this.props.onSearch}>
                    <Icon style={styles.searchIcon} name={'magnify'} size={27} onClick/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Header
