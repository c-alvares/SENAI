import { TouchableOpacity, Text } from "react-native";

import styles from './style';

export default function TouchableOpacityContato(props) {
    const { onPress } = props;

    return(
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Contato", { "contato":list.contato} )}}>
            <Text style={styles.nomes}>{list.nome}</Text>                            
        </TouchableOpacity>
    )

}