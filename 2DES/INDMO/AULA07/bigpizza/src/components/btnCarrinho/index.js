import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/index.js';

export default function btnCarrinho(props) {
    const  {value, onPress } = props;

    return(
        <TouchableOpacity style={styles.btnCarrinho} onPress={() => {onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    ) 
}