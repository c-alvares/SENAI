import * as React from 'react';
import { View, Text, } from 'react-native';

import styles from '../styles/style.js';

import ButtonComecar from '../components/buttonComecar/index';

export default function Home({ navigation }) {

    const comecar = (() => {
        // console.log("deu bom");
        navigation.navigate('Quest1')
    });

    return (
        <View style={styles.container}>
            <Text>Seja bem vindo ao nosso Quiz</Text>
            <ButtonComecar value="Começar" onPress={comecar} />
        </View>
    );
}