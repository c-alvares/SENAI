import {TouchableOpacity, Text} from 'react-native';

export default function CardCompromisso(props) {
    const { value, onPress} = props;

    return(
        <TouchableOpacity style={styles.card} onPress={() => {onPress()}}>
            <Text style={styles.texto}></Text>
        </TouchableOpacity>
    )
}