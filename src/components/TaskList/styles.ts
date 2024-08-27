import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        width: '100%',

    },
    counterContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    createdTasksText: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold'
    },
    completedTasksText: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold'
    },
    counterText: {
        backgroundColor: '#333333',
        color: '#D9D9D9',
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    noContentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 48,
        borderTopColor: '#333333',
        borderTopWidth: 1,
        marginTop: 20
    },
    noContentImage: {
        width: 56,
        height: 56,
        marginBottom: 16
    },
    noContentText: {
        color: '#808080',
        fontSize: 14,
    }
})