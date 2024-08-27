import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  // Centraliza o container de input
        position: 'relative',
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -27
    },
    input: {
        width: 271,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 8,
        color: '#FFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button: {
        height: 52,
        width: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextCircle: {
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 8,
    },
    buttonText: {
        padding: 0,
        margin: 0,
        color: '#FFFF',

    }
});
