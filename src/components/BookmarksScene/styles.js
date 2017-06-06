import { StyleSheet, Platform } from 'react-native';

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

export default styles;