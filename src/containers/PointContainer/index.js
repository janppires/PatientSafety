import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const PointContainer = ({navigation}) => (
    <View style={styles.container}>
        <Text>{navigation.state.params.point.name}</Text>
    </View>
);

function mapStateToProps (state, props) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointContainer);