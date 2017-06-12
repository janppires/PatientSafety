import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopicsList = ({topics, onPress}) => {

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.count}> ({item.points.length})</Text>
                <Icon style={styles.icon} name={item.icon} />
            </View>
        </TouchableOpacity>  
    )

    const renderSeparator = () => (
        <View style={styles.separator}/>
    )

    return (
        <FlatList 
            data={topics}
            keyExtractor={topic => topic.id}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}>
        </FlatList>
    )
}

export default TopicsList;