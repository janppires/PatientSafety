import React from 'react';
import { StackNavigator } from 'react-navigation';
import styles from './styles';
import BookmarksListContainer from '../../containers/BookmarksListContainer'

export default StackNavigator({
  BooksmarksListView: {
    screen: BookmarksListContainer,
    path: '/',
    navigationOptions: {
      title: 'Bookmarks',
    }
  },
}, {
    navigationOptions: {
        headerStyle: styles.header
    }
})
