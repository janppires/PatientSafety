import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopicsListItem = ({topic, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(topic)}>
            <View style={styles.item}>
                <Text style={styles.title}>{topic.name}</Text>
                <Text style={styles.count}> ({topic.articles.length})</Text>
                <Icon style={styles.icon} name={topic.icon} />
            </View>
        </TouchableOpacity>   
    )
}

const TopicsList = ({topics, onPress}) => {
    return (
        <ScrollView style={styles.scroll}>
            { topics.map((topic, index) => <TopicsListItem topic={topic} key={index} onPress={onPress}/>)}
        </ScrollView>
    )
}

export default TopicsList;