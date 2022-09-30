import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

export default function CardCompromisso(props) {
    const { value, onPress} = props;

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => {onPress()}}>
                <Text style={styles.compromisso}></Text>
                <Text style={styles.horario}></Text>
            </TouchableOpacity>
        </View>
    )
}