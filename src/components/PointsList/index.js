import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PointsList = ({navigation, points, onPointSelected}) => {

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.container} onPress={() => onPointSelected(item)}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Icon style={styles.arrow} name={'chevron-right'} />
            </View>
        </TouchableOpacity>
    )

    const renderSeparator = () => (
        <View style={styles.separator}/>
    )

    return (
        <FlatList 
            removeClippedSubviews={false} // hack
            data={points}
            keyExtractor={point => point.id}
            renderItem={renderItem}
        />
    )
}

export default PointsList