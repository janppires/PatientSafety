import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TopicView = (props) => (
    <View style={styles.container}>
        <Text>{'yeahhh'}{props.topic.name}</Text>
    </View>
);

export default TopicView;