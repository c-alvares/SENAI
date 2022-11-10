import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6047B3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        backgroundColor: '#4827B3',
        width: '94vw',
        alignItems: 'center',
        marginTop: '1vh',
    },
    logo:{
        width:'15vw',
        height:'15vw',
    },
    titulo:{
        color: 'white',
        fontSize: '0.9em'
    },
    container2: {
        backgroundColor: '#FFF',
        width: '94vw',
        height: '61vh',
        borderRadius: '12px',
        alignItems: 'center',
        justifyContent: 'top',
        paddingTop: '1vh',
    },
    inputs: {
        border: '1px solid #4827B3',
        borderRadius: '12px',
        margin: '0.6vh',
        width: '88vw',
        height: '4vh',
    },
    button: {
        width: '86vw',
        height: '4vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4827B3',
        margin: '1vh',
    },
    buttonText: {
        fontSize: '0.8em',
        color: 'white',
    },
})