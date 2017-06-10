import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    searchButton: {
        position: 'absolute',
        right: 10,
    },
    searchIcon: {
        color: '#005EB8'
    },
    logo: {
        height: 25
    }
});

export default styles;