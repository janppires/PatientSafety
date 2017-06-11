import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { getTopic } from '../../redux/modules/topics';

const TopicContainer = (props) => (
    <View style={styles.container}>
        <Text>{props.topic.name}</Text>
    </View>
);

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