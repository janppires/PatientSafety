import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {paddingTop: 30}
        })
    },
    scroll: {
        flex: 1,
        backgroundColor: '#E8EDEE',
        paddingVertical: 5
    },
    item: {
        flex: 1,
        height: 100,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 24
    },
    
});

export default styles;