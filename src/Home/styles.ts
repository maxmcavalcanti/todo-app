import { StyleSheet } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#0D0D0D',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 173
    },
    logoImage: {
        width: 132,
        height: 70,
        resizeMode: 'contain'
    }
});