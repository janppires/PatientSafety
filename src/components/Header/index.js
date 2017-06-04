import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Logo from '../Logo';

class Header extends Component {
    render() {

        return (
            <View style={styles.header}>      
                <View style={styles.content}><Logo style={styles.logo}/></View>
            </View>
        )
    }
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
)(Header)
