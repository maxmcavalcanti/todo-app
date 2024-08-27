import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskButton: {
        marginTop: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#262626',
    },
    taskMarker: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    taskMarkerDone: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#5E60CE',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    taskText: {
        flex: 1,
        fontSize: 16,
        color: '#F2F2F2',
    },
    taskTextDone: {
        flex: 1,
        fontSize: 16,
        color: '#B2B2B2',
        textDecorationLine: 'line-through',
    },
});
