import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Logo from '../Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopicsHeader = ({navigation}) => {

    const _navigateToSearch = () => navigation.navigate('SearchView', {});

    return (
        <View style={styles.container}>      
            <Logo style={styles.logo}/>
            <TouchableOpacity style={styles.searchButton} onPress={_navigateToSearch}>
                <Icon style={styles.searchIcon} name={'magnify'}/>
            </TouchableOpacity>
        </View>
    )
}

export default TopicsHeader
