import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getBookmarks } from '../../redux/modules/bookmarks';
import { getPoints } from '../../redux/modules/topics';

const BookmarksList = ({points, navigation}) => {
  
  const _navigateToPoint = (point) => {
      navigation.navigate('BookmarkPointView', { point });
  }

  const renderBookmarkItem = (point, key) => (
    <View key={key}>
      <TouchableOpacity onPress={() => _navigateToPoint(point)}>
        <Text>{point.topicId} - {point.id} > {point.name}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
        {points.map((p, key) => renderBookmarkItem(p, key))}
    </View>
  )
};

function mapStateToProps (state) {
  const pointsIds = getBookmarks(state);
  return {
    points: getPoints(state, pointsIds),
  }
}

function mapDispatchToProps (dispatch) {
  return {
      
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksList)