import * as React from 'react';
import { View, Text, } from 'react-native';

import styles from '../styles/style.js';



export default function Result({ navigation }) {


    const getAnswer = async () => {
        try {
            const value = await AsyncStorage.getItem('@token1')
            if (value !== null) {
                alert("Acerto miserávi")
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Text></Text>

        </View>
    );
}