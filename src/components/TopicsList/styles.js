import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex: 1,
        height: 60,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.secundary
    },
    title: {
        fontSize: 24,
        color: colors.white
    },
    icon: {
        color: colors.primaryAccent,
        fontSize: 30,
        marginRight: 8,
    },
    arrow: {
        fontSize: 30,
        color: colors.white
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: colors.primary,
        marginLeft: "14%"
    }
    
});

export default styles;