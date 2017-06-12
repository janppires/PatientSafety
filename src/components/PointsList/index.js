import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

const PointsList = ({navigation, points, onPointSelected}) => {

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.container} onPress={() => onPointSelected(item)}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text>COISO</Text>
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
            ItemSeparatorComponent={renderSeparator}>
        </FlatList>
    )
}

export default PointsList