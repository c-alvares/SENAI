import { TouchableOpacity, Image } from "react-native";

import styles from '../../styles/style';

export default function ButtonFinish(props) {
    const { onPress } = props;
    
    return (
        <TouchableOpacity style={styles.btn2} onPress={() => {onPress()}}>
            <Image style={styles.finish} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1505/1505473.png'}}/>
        </TouchableOpacity>
    )
}