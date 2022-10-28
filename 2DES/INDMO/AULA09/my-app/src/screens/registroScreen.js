import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/style';

export default function Registro({navigation}) {

    const log = [
        {
            pet: "pet" ,
            vet: "vet",
            vac: "vac",
            date: "date"
        }
    ];

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('registro', value)
        } catch (e) {
            console.log(e);
        }
        navigation.navigate("Historico")
    }
    
    return(
        <View style={styles.container}>
            {
                log.map((registro, indice) => {
                    return(
                        <View key={indice}>
                            <TextInput onChangeText={(pet) => {log.push(pet)}} style={styles.textInput} placeholder="Nome do pet" placeholderTextColor={'#00000077'}/>
                            <TextInput onChangeText={(vet) => {log.push(vet)}} style={styles.textInput} placeholder="Nome da(o) médica(o) veterinária(o)" placeholderTextColor={'#00000077'}/>
                            <TextInput onChangeText={(vac) => {log.push(vac)}} style={styles.textInput} placeholder="Nome da vacina" placeholderTextColor={'#00000077'}/>
                            <TextInput onChangeText={(date) => {log.push(date)}}style={styles.textInput} placeholder="Data da Aplicação" placeholderTextColor={'#00000077'}/>
                        </View>
                    )
                })
            }
            <TouchableOpacity style={styles.conectar} onPress={() => {
                log.push(value)
                storeData(log)
            }}>
                <Text style={styles.text}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}