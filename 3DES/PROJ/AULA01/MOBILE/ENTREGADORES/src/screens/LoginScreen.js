import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import styles from "../styles/style";

export default function LoginScreen({ navigation }) {
    // Recebimento dos dados inseridos nos inputs para login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 
    const logIn = (value1, value2) => {
        // console.log(value1, value2)
        const data = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    Email: value1,
                    Senha: value2
                })
        }
        fetch("http://localhost:3000/login", data)
            .then((response) => response.status)
            .then((resp) => {
                if (resp === 200) {
                    console.log("Acesso liberado");
                    // navigation.navigate('Entregas')
                } else {
                    console.log(resp.status)
                }
            })
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

