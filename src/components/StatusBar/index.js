import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import styles from './styles';

export default (props) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" {...props} />
  </View>
);