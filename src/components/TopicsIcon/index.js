import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopicsIcon = ({ tintColor, focused, style }) => (
    <Icon
        style={[styles.icon, style, { color: tintColor }]}
        name={focused ? 'format-list-bulleted-type' : 'format-list-bulleted-type'}
    />
)

export default TopicsIcon;