import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import TopicItem from '../TopicItem';
import styles from './styles';

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

export default TopicsScroll;
