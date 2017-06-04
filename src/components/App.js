import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import Footer  from './Footer';
import TopicsScene from './TopicsScene';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
