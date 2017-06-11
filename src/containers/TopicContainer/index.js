import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { getTopic } from '../../redux/modules/topics';
import PointsList from '../../components/PointsList';

const TopicContainer = ({topic, navigation}) => {

  const _navigateToPoint = (point) => {
      navigation.navigate('PointView', { point });
  }

  return (
      <View style={styles.container}>
          <PointsList onPointSelected={(point) => _navigateToPoint(point)} points={topic.points}/>
      </View>
  )
};

function mapStateToProps (state, props) {
  return {
    topic: getTopic(state, props.navigation.state.params.topic.id)
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicContainer);