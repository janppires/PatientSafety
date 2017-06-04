import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopicItem = (props) => {
    const {topic} = props;

    return (    
        <View style={[styles.container, props.style]}>
            <Text style={styles.title}>{topic.name}</Text>
            <Text style={styles.count}> ({topic.articles.length})</Text>
            <Icon name={topic.icon} size={30} color="#41B6E6" />
        </View>
    )
}



export default TopicItem
