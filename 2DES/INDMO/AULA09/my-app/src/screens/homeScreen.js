import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/style';

export default function Home({navigation}) {
    
    return(
        <View style={styles.containerHome}>
            <TouchableOpacity style={styles.frame} onPress={() => {navigation.navigate("Historico")}}>
                <Image source={require('../../assets/arquivo.png')}  style={styles.icon}/>
                <Text style={styles.frameText}>Histórico de Vacinas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.frame} onPress={() => {navigation.navigate("Registro")}}>
                <Image source={require("../../assets/vacinacao.png")} style={styles.icon}/>
                <Text style={styles.frameText}>Registrar Vacina</Text>
            </TouchableOpacity>
        </View>
    )
}