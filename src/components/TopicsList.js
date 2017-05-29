import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { getTopics, getLoading } from '../reducers/topics';
import { fetchTopics } from '../actions';

class TopicsList extends Component {

    componentWillMount(){
        this.props.fetchTopics();
    }
    
    render() {
        const { isLoading, topics } = this.props;
        return (
            <View style={styles.container}>
                <Text>TOPICS</Text>
                <View style={styles.content}>
                    {
                        isLoading && <Text>Loading</Text>
                    }
                    {
                        topics.map((topic, index)=> {
                            return (
                                <View key={index} >
                                    <Text>{topic.name} ({topic.articles.length})</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        ...Platform.select({
            ios: {paddingTop: 30}
        })
    },
    content: {
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
)(TopicsList)
