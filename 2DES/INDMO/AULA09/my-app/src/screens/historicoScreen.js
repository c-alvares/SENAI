import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/style';

export default function Histórico({navigation}) {
    
    return(
        <View style={styles.containerHist}>
            <TextInput style={styles.textInput} placeholder="Nome do pet" placeholderTextColor={'#00000077'}/>
            <View style={styles.frame2}>
                <Text style={styles.frameText2}>PET: </Text>
                <Text style={styles.frameText2}>Veterinário: </Text>
                <Text style={styles.frameText2}>Vacina: </Text>
                <Text style={styles.frameText2}>Data: </Text>
            </View>
        </View>
    )
}