import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopicsList = ({topics, onPress}) => {

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
            <View style={styles.item}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon style={styles.icon} name={item.icon} />
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <Icon style={styles.arrow} name={'chevron-right'} />
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
        />
    )
}

export default TopicsList;