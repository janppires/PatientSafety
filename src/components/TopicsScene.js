import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import TopicsScroll from './TopicsScroll';
import { getTopics, getLoading } from '../reducers/topics';
import { fetchTopics } from '../actions';

class TopicsScene extends Component {

    componentWillMount(){
        this.props.fetchTopics();
    }
    
    render() {
        const { isLoading, topics } = this.props;
        return (
            <View style={styles.container}>
                { isLoading && <Text>Loading</Text> }
                { topics.length > 0 ? <TopicsScroll topics={topics}/> : null }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function mapStateToProps (state) {
  return {
    topics: getTopics(state),
    isLoading : getLoading(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTopics: () => dispatch(fetchTopics())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsScene)
