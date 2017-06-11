import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { colors } from '../../constants/styles';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';

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
        screen: BookmarksScreen,
        path: '/',
        navigationOptions: {
            tabBarLabel: 'Bookmarks',
            tabBarIcon :  ({ tintColor, focused }) => (
                <Icon
                    name={'bookmark-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
            
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