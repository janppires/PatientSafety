import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles'

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    searchButton: {
        position: 'absolute',
        right: 10,
    },
    searchIcon: {
        color: colors.primary,
        fontSize: 27
    },
    logo: {
        height: 25
    }
});

export default styles;