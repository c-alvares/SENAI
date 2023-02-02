import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import styles from "../styles/style";

export default function LoginScreen({ navigation }) {
    // Recebimento dos dados inseridos nos inputs para login
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    // 
    const logIn = () => {
        navigation.navigate('Entregas')
    }

    return (
        <View style={styles.container}>
            <Text>IRANGO DELIVERY</Text>

            <TextInput style={styles.loginsInput}
                onChangeText={(value) => { setEmail(value) }}
                placeholder="Insira seu e-mail"
                placeholderTextColor="#CCC">
            </TextInput>

            <TextInput style={styles.loginsInput}
                onChangeText={(value) => { setPassword(value) }}
                placeholder="Insira sua senha"
                placeholderTextColor="#CCC">
            </TextInput>

            <StatusBar style="auto" />

            <Button
                title="Acessar"
                onPress={() => { logIn() }}
            />
        </View>
    )
}

