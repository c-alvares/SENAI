import { StyleSheet } from "react-native";

export default StyleSheet.create({
// App Cozinha
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
        color: '#FFF',
        padding: '10px',
        fontWeight: 'bold',
    },
    pedidoBox: {
        flexDirection: 'flex-start',
        padding: '15px',
        margin: '20px',
        borderRadius: '10px',
        backgroundColor: '#FB8D13'
    },
    dados: {
        fontSize: '20px',
        fontFamily: 'Verdana',
        color: '#FFF',
        padding: '4px'
    },


// Components    
btn1: {
    height: "50px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px",
    backgroundColor: "#CB1E04"
  },
  textoBtn1: {
    fontWeight: "bold",
    fontSize: "17px",
    color: "#FFF",
    
  },
});