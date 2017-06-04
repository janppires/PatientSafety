import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getBookmarks } from '../../reducers/bookmarks';

const BookmarksScene = (props) => (
    <View>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksScene)
