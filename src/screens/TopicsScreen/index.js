import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import styles from './styles';
import TopicsHeader from '../../components/TopicsHeader';
import TopicsListContainer from '../../containers/TopicsListContainer';
import AddBookmarkContainer from '../../containers/AddBookmarkContainer';
import TopicContainer from '../../containers/TopicContainer';
import SearchContainer from '../../containers/SearchContainer';

export default StackNavigator({
  TopicsListView: {
    screen: TopicsListContainer,
    path: '/topics',
    navigationOptions: {
      header: TopicsHeader,
    }
  },
  TopicView: {
    screen: TopicContainer,
    path: ':topicId',
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.topic.name,
        headerStyle: styles.header,
        headerRight: (<AddBookmarkContainer topic={navigation.state.params.topic}/>)
    })
  },
  SearchView: {
      screen: SearchContainer,
      path: '/search',
      navigationOptions: {
          title: 'Search',
          headerStyle: styles.header,
      }
  }
});
