import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import styles from './styles';
import TopicsHeader from '../../components/TopicsHeader';
import TopicsListContainer from '../../containers/TopicsListContainer';
import ToogleBookmarkContainer from '../../containers/ToogleBookmarkContainer';
import TopicContainer from '../../containers/TopicContainer';
import SearchContainer from '../../containers/SearchContainer';
import PointsList from '../../components/PointsList';
import PointContainer from '../../containers/PointContainer';

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
        headerStyle: styles.header
    })
  },
  SearchView: {
      screen: SearchContainer,
      path: '/search',
      navigationOptions: {
          title: 'Search',
          headerStyle: styles.header,
      }
  },
  PointsListView: {
    screen: PointsList,
    path: 'points',
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.point.name,
        headerStyle: styles.header
    })
  },
  PointView: {
    screen: PointContainer,
    path: ':pointId',
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.point.name,
        headerStyle: styles.header,
        headerRight: (<ToogleBookmarkContainer point={navigation.state.params.point}/>)
    })
  }
});
