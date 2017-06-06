import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../Header';
import Footer  from '../Footer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTopics, getLoading } from '../../reducers/topics';
import { fetchTopics } from '../../actions';

class TopicsScene extends Component {

    componentWillMount(){
        this.props.fetchTopics();
    }

    _renderItem(topic, index) {
        return (
            <View style={styles.item} key={index}>
                <Text style={styles.title}>{topic.name}</Text>
                <Text style={styles.count}> ({topic.articles.length})</Text>
                <Icon name={topic.icon} size={30} color="#41B6E6" />
            </View>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsScene)
