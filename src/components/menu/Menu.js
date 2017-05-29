import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Logo from '../Logo';
import Header from './Header';
import { isOpen, getMenuEntries } from '../../reducers/menu';

const Menu = (props) => { 
    const { entries } = props;
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                {
                    entries.map((entry, index) => {
                        return (
                            <View key={index} >
                                <Text>{entry.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {

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
    isOpen: isOpen(state),
    entries: getMenuEntries(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
