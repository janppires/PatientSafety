import React from 'react';
import { View, Text, TabBarIOS } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { getSelectedTab } from '../../reducers/tabs';
import { setSelectedTab } from '../../actions';

import TopicsScene from '../TopicsScene';
import BookmarksScene from '../BookmarksScene';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = TabNavigator({
    Topics: {
        screen: TopicsScene,
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

const App2 = (props) => { 
    const { selectedTab, setSelectedTab } = props;
    return (
          <TabBarIOS
            tintColor="black"
            barTintColor="#3abeff">
                <Icon.TabBarItemIOS
                title="Topics"
                iconName="format-list-bulleted-type"
                selectedIconName="format-list-bulleted-type"
                selected={selectedTab == 'topics'}
                onPress={() => setSelectedTab('topics')}>
                {_renderContent(TopicsScene)}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                title="Bookmarks"
                iconName="bookmark-outline"
                selectedIconName="bookmark"
                selected={selectedTab == 'bookmarks'}
                onPress={() => setSelectedTab('bookmarks')}>
                {_renderContent(BookmarksScene)}
                </Icon.TabBarItemIOS>
            </TabBarIOS>
       
    )
}

function mapStateToProps (state) {
  return {
      selectedTab: getSelectedTab(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
       setSelectedTab: (tabName) => dispatch(setSelectedTab(tabName))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
