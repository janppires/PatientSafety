import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Hamburger from 'react-native-hamburger';
import Logo from './Logo';

class Header extends Component {
    render() {

        return (
            <View style={styles.header}>      
                <View style={styles.content}><Logo style={styles.logo}/></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        height: 30
    }
})

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
)(Header)
