import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function CardCompromisso(props) {
    const { title, desc, onPress} = props;
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => {onPress()}}>
                <Text style={styles.compromisso}>{title}</Text>
                <Text style={styles.horario}>{desc}</Text>
            </TouchableOpacity>
        </View>
    )
}