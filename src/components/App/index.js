import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';

import TopicsScreen from '../TopicsScreen';
import BookmarksScene from '../BookmarksScene';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = TabNavigator({
    Topics: {
        screen: TopicsScreen,
        path: '/',
        navigationOptions: {
            tabBarLabel: 'Topics',
            tabBarIcon :  ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'format-list-bulleted-type' : 'format-list-bulleted-type'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
            
        },
    },
    Bookmarks: {
        screen: BookmarksScene,
        path: '/',
        navigationOptions: {
            tabBarLabel: 'Bookmarks',
            tabBarIcon :  ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'bookmark' : 'bookmark-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
            
        },
    }
});

export default App