import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TopicItem from './TopicItem';

const TopicsScroll = (props) => {

    return (    
        <ScrollView style={styles.container}>
            {
                props
                    .topics
                    .map((topic, index) => (<TopicItem style={styles.item} topic={topic} key={index}/>))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EDEE',
        paddingVertical: 5
        
    },
    item: {
        flex: 1,
        height: 100,
        margin: 5
    }
});

export default TopicsScroll;
