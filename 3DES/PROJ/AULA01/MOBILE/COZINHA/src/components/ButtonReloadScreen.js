import { TouchableOpacity, Image } from "react-native";

import styles from '../styles/style';

export default function ButtonReloadScreen(props) {
    const { onPress } = props;

    return (
        <TouchableOpacity style={styles.reloadBtn} onPress={() => { onPress() }}>
            <Image style={styles.btnImage} source={require("../assets/refresh-icon.png")} />
        </TouchableOpacity>
    )
}