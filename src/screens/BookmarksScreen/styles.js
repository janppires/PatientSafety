import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    header: {
        backgroundColor: colors.white,
        height: 40,
        paddingTop: 0
    }
});

export default styles;