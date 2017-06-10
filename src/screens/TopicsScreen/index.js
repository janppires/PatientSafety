import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { StackNavigator } from 'react-navigation';
import Header from '../../components/Header';
import Footer  from '../../components/Footer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTopics, getLoading } from '../../redux/modules/topics';
import { fetchTopics } from '../../redux/modules/topics/actions';
import TopicView from '../../components/TopicView';
import SearchView from '../../components/SearchView';

class TopicsScreen extends Component {

    componentWillMount(){
        this.props.fetchTopics();
    }

    _navigateToTopic(topic) {
        this.props.navigation.navigate('TopicView', { topicId: topic.id, topicName: topic.name })
    }
    
    _navigateToSearch() {
        this.props.navigation.navigate('SearchView', {})
    }

    _renderItem(topic, index) {
        return (
             <TouchableOpacity onPress={() => this._navigateToTopic(topic)} key={index}>
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
                { topics.map((topic, index) => this._renderItem(topic, index))}
            </ScrollView>
        )
    }
    
    render() {
        const { isLoading, topics } = this.props;
        return (
            <View style={styles.container}>
                <Header onSearch={() => this._navigateToSearch()}/>
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

const TopicsListView = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsScreen)


export default StackNavigator({
  TopicsListView: {
    screen: TopicsListView,
    path: '/',
    navigationOptions: {
      header: null,
    },
  },
  TopicView: {
    screen: TopicView,
    path: '/:topicId',
    navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.topicName,
    })
  },
  SearchView: {
      screen: SearchView,
      path: '/search',
      navigationOptions :{
          title: 'Search'
      },
      transitionConfig: {
          
      }
  }
}, {
    navigationOptions: {
        headerStyle: {
            height: 40,
            paddingTop: 0
       }
    }
});
