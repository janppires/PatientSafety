import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { StackNavigator } from 'react-navigation';
import Header from '../Header';
import Footer  from '../Footer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTopics, getLoading } from '../../reducers/topics';
import { fetchTopics } from '../../actions';
import TopicView from '../TopicView';

class TopicsScreen extends Component {

    componentWillMount(){
        this.props.fetchTopics();
    }

    _navigateToSubview(topic) {
        this.props.navigation.navigate('TopicView', { topicId: topic.id, topicName: topic.name })
    }

    _renderItem(topic, index) {
        return (
             <TouchableOpacity onPress={() => this._navigateToSubview(topic)} key={index}>
                <View style={styles.item}>
                    <Text style={styles.title}>{topic.name}</Text>
                    <Text style={styles.count}> ({topic.articles.length})</Text>
                    <Icon name={topic.icon} size={30} color="#41B6E6" />
                </View>
            </TouchableOpacity>
            
        )
    }

    _renderScroll(topics) {
        return (
            <ScrollView style={styles.scroll}>
                {
                    topics.map((topic, index) => this._renderItem(topic, index))
                }
            </ScrollView>
        )
    }
    
    render() {
        const { isLoading, topics } = this.props;
        return (
            <View style={styles.container}>
                <Header/>
                { isLoading && <Text>Loading</Text> }
                { topics.length > 0 ? this._renderScroll(topics) : null }
                <Footer/>
            </View>
        )
    }
}

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

const TopicsSceneConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsScreen)


export default StackNavigator({
  Topics: {
    screen: TopicsSceneConnected,
    path: '/',
    navigationOptions: {
      header: null,
    },
  },
  TopicView: {
    screen: TopicView,
    path: '/:topic',
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.topicName,
    })
  }
});
