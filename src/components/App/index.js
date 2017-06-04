import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer  from '../Footer';
import TopicsScene from '../TopicsScene';

const App = (props) => { 
   
    return (
          <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <TopicsScene/>
            </View>
            <Footer/>
        </View>
       
    )
}

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
)(App)
