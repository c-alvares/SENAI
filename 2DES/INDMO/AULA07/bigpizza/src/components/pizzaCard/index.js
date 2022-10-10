import {Text, Image, View, Button } from "react-native";
import styles from '../../style/index.js';
export default function PizzaCard() {
    const { value1, value2 } = props;

    return (
        <View style={styles.card}>
            <Image style={styles.foto}/>
            <Text style={styles.nome}>{value1}</Text>
            <Text style={styles.descricao}>{value2}</Text>
            <Button style={styles.addCarrinho} />
        </View>
    )
}