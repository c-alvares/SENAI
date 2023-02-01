import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // General
    container: {
        flex: 1,
        backgroundColor: '#E4DDB3',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#911B04',
    },
    headerText: {
        fontSize: '30px',
        fontFamily: 'Verdana',
        color: '#FFF',
        padding: '10px',
        fontWeight: 'bold',
        marginLeft: '50px',
    },
    boxOrder: {
        flexDirection: 'flex-start',
        padding: '15px',
        margin: '20px',
        borderRadius: '10px',
        backgroundColor: '#FB8D13'
    },
    orderData: {
        fontSize: '20px',
        fontFamily: 'Verdana',
        color: '#FFF',
        padding: '4px'
    },


    // Components
    reloadBtn: {
        backgroundColor: "#FFF",
        borderRadius: "100px",
        width: "70px",
        height: "70px",
        margin: "10px",
        marginRight: '20px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    btnImage: {
        width: "65px",
        height: "65px",
        backgroundColor: "#FB8D13",
        borderRadius: "100px",
        border: "2px solid #911B04 "
    },
    btn1: {
        height: "50px",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        margin: "15px",
        backgroundColor: "#CB1E04"
    },
    textBtn1: {
        fontWeight: "bold",
        fontSize: "17px",
        color: "#FFF",
    },
});