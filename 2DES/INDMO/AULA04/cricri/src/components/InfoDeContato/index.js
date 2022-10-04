import { TouchableOpacity, Text } from "react-native";

import styles from './style';

export default function InfoDeContato(props) {
    const { onPress } = props;

    return(
        <TouchableOpacity style={styles.button} onPress={() => {onPress()}}>
            <Text style={styles.nomes}>{list.nome}</Text>                            
        </TouchableOpacity>
    )

}