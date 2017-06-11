import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { colors } from '../../constants/styles';

import { TabNavigator } from 'react-navigation';
import BookmarkIcon from '../../components/BookmarkIcon';
import TopicsIcon from '../../components/TopicsIcon';
import StatusBar from '../../components/StatusBar';
import TopicsScreen from '../TopicsScreen';
import BookmarksScreen from '../BookmarksScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = TabNavigator({
    Topics: {
        screen: TopicsScreen,
        path: '/',
        navigationOptions: {
            tabBarLabel: 'Topics',
            tabBarIcon :  TopicsIcon,
        },
    },
    Bookmarks: {
        screen: BookmarksScreen,
        path: '/',
        navigationOptions: {
            tabBarLabel: 'Bookmarks',
            tabBarIcon : BookmarkIcon,
        },
    }
}, {
    tabBarOptions: {
        activeTintColor: colors.white,
        activeBackgroundColor: colors.primary,
        inactiveTintColor: colors.darkGray,
    }
});

const AppNavigator = () => (
    <View style={styles.container}>
        <StatusBar/>
        <Tabs/>
    </View>
)

export default AppNavigator