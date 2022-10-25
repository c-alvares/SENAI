import { TouchableOpacity, Image } from "react-native";

import styles from '../../styles/style';

export default function ButtonNext(props) {
    const { onPress } = props;
    
    return (
        <TouchableOpacity style={styles.btn2} onPress={() => {onPress()}}>
            <Image style={styles.next} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2879/2879593.png'}}/>
        </TouchableOpacity>
    )
}