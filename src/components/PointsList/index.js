import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

const PointsList = ({navigation, points, onPointSelected}) => {

    const PointsListItem = ({point}) => {
        return (
            <TouchableOpacity style={styles.container} onPress={() => onPointSelected(point)}>
                <View style={styles.item}>
                    <Text style={styles.title}>{point.name}</Text>
                    <Text>COISO</Text>
                </View>
            </TouchableOpacity>   
        )
    }

    return (
        <ScrollView style={styles.scroll}>
            { points.map((point, index) => <PointsListItem point={point} key={index}/>)}
        </ScrollView>
    )
}

export default PointsList