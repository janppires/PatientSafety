import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 24
    }, 
    count: {

    }
});

export default TopicItem
