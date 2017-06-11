import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookmarkIcon = ({ tintColor, focused, style }) => (
    <Icon
        style={[styles.icon, { color: tintColor }, style]}
        name={focused ? 'bookmark' : 'bookmark-outline'}
    />
)

export default BookmarkIcon;