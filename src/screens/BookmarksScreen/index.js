import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles';
import { getBookmarks } from '../../redux/modules/bookmarks';

const BookmarksList = (props) => (
    <View style={styles.container}>
        <Text>I am Bookmarks! {props.bookmarks.length}</Text>
    </View>
);

function mapStateToProps (state) {
  return {
    bookmarks: getBookmarks(state),
  }
}

function mapDispatchToProps (dispatch) {
  return {
      
  }
}

const BooksmarksListView = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksList)

export default StackNavigator({
  BooksmarksListView: {
    screen: BooksmarksListView,
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
