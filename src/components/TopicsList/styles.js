import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex: 1,
        height: 100,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.red
    },
    title: {
        fontSize: 24
    },
    icon: {
        color: colors.primaryAccent,
        fontSize: 30
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: colors.primary,
        marginLeft: "14%"
    }
    
});

export default styles;