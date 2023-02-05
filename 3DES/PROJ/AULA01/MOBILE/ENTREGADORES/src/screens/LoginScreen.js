import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "../styles/style";

export default function LoginScreen({ navigation }) {
    // Recebimento dos dados inseridos nos inputs para login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 
    const logIn = () => {
        console.log(email, password)
        const data = {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(
                {
                    Email: email,
                    Senha: password
                })
        }
        fetch("http://localhost:3000/login", data)
            .then((response) => response.status)
            .then((resp) => {
                if (resp === 200) {
                    // console.log("Acesso liberado");
                    navigation.navigate('Entregas')
                } else {
                    console.log(resp.status)
                }
            })
    }

    const salvar = async (data) => {
        await AsyncStorage.setItem('data', data);

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

