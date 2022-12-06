import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/style';

export default function Tela2({navigation}) {


    return(
        <View style={styles.container}>
            <Text>Tela 2</Text>
            <Button onPress={() => {navigation.navigate("Tela3")} }/>
        </View>
    )
}