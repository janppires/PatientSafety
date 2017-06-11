import React from 'react';
import { StackNavigator } from 'react-navigation';
import styles from './styles';
import BookmarksListContainer from '../../containers/BookmarksListContainer'
import PointContainer from '../../containers/PointContainer';
import ToogleBookmarkContainer from '../../containers/ToogleBookmarkContainer';

export default StackNavigator({
  BooksmarksListView: {
    screen: BookmarksListContainer,
    path: '/bookmarks',
    navigationOptions: {
      title: 'Bookmarks',
    }
  },
  BookmarkPointView: {
    screen: PointContainer,
    path: ':pointId',
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.point.name,
        headerStyle: styles.header,
        headerRight: (<ToogleBookmarkContainer point={navigation.state.params.point}/>)
    })
  }
}, {
    navigationOptions: {
        headerStyle: styles.header
    }
})
