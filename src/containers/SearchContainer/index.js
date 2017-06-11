import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';

const SearchView = (props) => (
    <View style={styles.container}>
        <Text>I am Search!</Text>
    </View>
);

function mapStateToProps (state) {
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
)(SearchView)
