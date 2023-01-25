import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4DDB3',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#911B04',
    },
    cabecalho: {
        fontSize: '30px',
        fontFamily: 'Verdana',
        color: '#8FCFC1',
        padding: '10px',
    },
    pedidoBox: {
        flexDirection: 'flex-start',
        padding: '15px',
        margin: '30px',
        borderRadius: '10px',
        backgroundColor: '#FB8D13'
    },
    dados: {
        fontSize: '20px',
        fontFamily: 'Verdana',
        color: '#FFF',
        padding: '4px'
    },
});