import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import AddBookmarkButton from '../../components/AddBookmarkButton';
import styles from './styles';
import { getBookmarks, isBookmarked } from '../../redux/modules/bookmarks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddBookmarkContainer = ({point, isBookmarked, addBookmark}) => (
    <View style={styles.container}>
      <AddBookmarkButton style={styles.button} focused={isBookmarked} onPress={() => addBookmark(point)}/>
    </View>
);

function mapStateToProps (state, props) {
  return {
    isBookmarked: isBookmarked(state, props.point),
  }
}

function mapDispatchToProps (dispatch) {
  return {
      addBookmark: (bookmarkID) => dispatch(addBookmark(bookmarkID))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBookmarkContainer)