import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import TopicsList from '../../components/TopicsList';
import Footer  from '../../components/Footer';
import { getTopics, getLoading } from '../../redux/modules/topics';
import { fetchTopics } from '../../redux/modules/topics/actions';

class TopicsListContainer extends Component {

    componentWillMount(){
        this.props.fetchTopics();
    }

    _navigateToTopic(topic) {
        this.props.navigation.navigate('TopicView', { topic })
    }

    render() {
        const { isLoading, topics } = this.props;
        return (
            <View style={styles.container}>
                { isLoading && <Text>Loading</Text> }
                { topics.length > 0 ? <TopicsList topics={topics} onPress={topic => this._navigateToTopic(topic)}/> : null}
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
)(TopicsListContainer)