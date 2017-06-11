import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import styles from './styles';
import TopicsHeader from '../../components/TopicsHeader';
import TopicsListContainer from '../../containers/TopicsListContainer';
import AddBookmarkContainer from '../../containers/AddBookmarkContainer';
import TopicView from '../../components/TopicView';
import SearchView from '../../components/SearchView';

export default StackNavigator({
  TopicsListView: {
    screen: TopicsListContainer,
    path: '/topics',
    navigationOptions: {
      header: TopicsHeader,
    }
  },
  TopicView: {
    screen: TopicView,
    path: ':topicId',
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.topic.name,
        headerStyle: styles.header,
        headerRight: (<AddBookmarkContainer topic={navigation.state.params.topic}/>)
    })
  },
  SearchView: {
      screen: SearchView,
      path: '/search',
      navigationOptions: {
          title: 'Search',
          headerStyle: styles.header,
      }
  }
});
