import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ToogleBookmarkButton from '../../components/ToogleBookmarkButton';
import styles from './styles';
import { getBookmarks, isBookmarked } from '../../redux/modules/bookmarks';
import { toogleBookmark } from '../../redux/modules/bookmarks/actions';

const ToogleBookmarkContainer = ({point, isBookmarked, toogleBookmark}) => {

  return (
      <View style={styles.container}>
        <ToogleBookmarkButton style={styles.button} focused={isBookmarked} onPress={() => toogleBookmark(point, isBookmarked)}/>
      </View>
  )
};

function mapStateToProps (state, props) {
  return {
    isBookmarked: isBookmarked(state, props.point),
  }
}

function mapDispatchToProps (dispatch) {
  return {
      toogleBookmark: (point, isBookmarked) => dispatch(toogleBookmark(point, isBookmarked))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToogleBookmarkContainer)